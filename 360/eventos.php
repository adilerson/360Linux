<?php
    include('class.php');
    if (isset($_POST['nome'])){
        
        $evento = clean($_POST['nome']);
        $nome_atual_frame = '';
        $nome_atual_audio = '';

        if (strlen($_FILES['frameName']['name']) > 0)
        {

            $pasta = "../videoSpinApi/config/frame/";

            $nome_frameName    = $_FILES['frameName']['name'];
            $tamanho_frameName = $_FILES['frameName']['size'];
            
            
            $nome_atual_frame = $evento.'.png';
            $tmp = $_FILES['frameName']['tmp_name'];

            if(move_uploaded_file($tmp,$pasta.$nome_atual_frame)){
                
            }else{
                $erro[] =  "Falha ao enviar a foto ";
                
            }
        }

        if (!isset($erro)){
            if (strlen($_FILES['audioName']['name']) > 0)
            {

                $pasta = "../videoSpinApi/config/audio/";
                $permitidos = array(".png");	

                $nome_audioName    = $_FILES['audioName']['name'];
                $tamanho_audioName = $_FILES['audioName']['size'];
                
                
                $nome_atual_audio = $evento.'.mp3';
                $tmp = $_FILES['audioName']['tmp_name'];

                if(move_uploaded_file($tmp,$pasta.$nome_atual_audio)){
                    
                }else{
                    $erro[] =  "Falha ao enviar a foto ";
                    
                }

            }
        }

        if (!isset($erro)){
            $json = "{
                nome: ['".$evento."', Validators.required],
                tempo: ['".$_POST['tempo']."', Validators.required],
                frameName: ['".$nome_atual_frame."'..''],
                audioName: ['".$nome_atual_audio."'],
                data: ['".date("Y-m-d")."'],
                videoInput: ['', Validators.required],
                vNormal: ['".$_POST['vNormal']."', Validators.required],
                vSlow: ['".$_POST['vSlow']."', Validators.required],
                vFast: ['".$_POST['vFast']."', Validators.required],
                position: ['".$_POST['position']."']
            }
            ";

            $conteudo = json_decode($json);

            $fp = fopen("../videoSpinApi/config/evento/".$evento.".json","wb");

            fwrite($fp,$conteudo);

            fclose($fp);
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/style.css?teste=3" rel="stylesheet">
    <script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
    <title>360BR</title>
</head>
<body>
    <?php
        if (isset($erro)){
            foreach($erro as $val)
            {
                echo '<div class="erro">'.$val.'</div>';
            }
        }
    ?>
    <div class="settings">
        <a href="enviar.php">
            Envio de Audios e Molduras
            <img src="img/uploadW.png">
        </a>
    </div>

    <div>
        <form method="post" action="eventos.php" enctype="multipart/form-data">
            <div class="inputs">
                <label class="branco label" for="nome">Nome</label><input type="text" name="nome" id="nome">
            </div>
            
            <div class="inputs">
                <label class="branco label" for="frameName">Moldura</label><input type="file" accept="image/png" name="frameName" id="frameName">
            </div>
            <div class="inputs">
                <label class="branco label" for="audioName">Áudio</label><input type="file" accept="audio/mp3" name="audioName" id="audioName">
            </div>
            <!--
            <div class="inputs">
                <label class="branco label" for="data">Data do Evento</label><input type="text" name="data" id="data">
            </div>-->
            <div class="inputs">
                <label class="branco label" for="tempo">Tempo Total</label><input type="text" name="tempo" id="tempo">
            </div>
            <div class="inputs">
                <label class="branco label esquerda" for="vNormal">&nbsp;&nbsp;&nbsp;&nbsp;Normal</label><input type="number" name="vNormal" id="vNormal">
            </div>
            <div class="inputs">
                <label class="branco label esquerda" for="vSlow">&nbsp;&nbsp;&nbsp;&nbsp;Slow</label><input type="number" name="vSlow" id="vSlow">
            </div>
            <div class="inputs">
                <label class="branco label esquerda" for="vFast">&nbsp;&nbsp;&nbsp;&nbsp;Fast</label><input type="number" name="vFast" id="vFast">
            </div>
            <div class="inputs">
                
                <label class="branco label" for="position">Posição dos Botões</label>
                <select name="position" id="position">
                    <option value="top">Topo</option>
                    <option value="center">Centro</option>
                    <option value="bottom">Rodapé</option>
                </select>

            </div>
            <div class="botaoIncluir">
                <input type="submit" class="btn" value="Incluir" id="Incluir">
            </div>
        </form>
    </div>
    <div class="dividir"></div>
    <?php



$itens = new DirectoryIterator('../videoSpinApi/config/evento');
    foreach($itens as $item){

        $ext = pathinfo($item, PATHINFO_EXTENSION);
        $filename = pathinfo($item, PATHINFO_BASENAME);
        $file = pathinfo($item, PATHINFO_FILENAME);
        

        /*if ( ($ext != 'png') || ($item->gettype() == 'dir') || ($item == '.') || ($item == '..') ) {
            continue;
        }
        */
        if ( $ext == 'json')
        {
            echo '
            <div class="pai">
                <div class="link">
                    <a href="index.php?evento='.$filename.'" nome="'.$file.'" class="bubbly-button" style="">'.corrigeNome($filename).'</a>
                </div>
                
            </div>';
        }
            
    }

    


    
    ?>
</body>

<script>

    if ($("#tempo").val() == ''){
        $("#tempo").val("12");
        $("#vNormal").val("5");
        $("#vFast").val("4");
        $("#vSlow").val("3");
    }

    $("#tempo").change(function(){
        var tempo = $("#tempo").val();
        if (tempo > 3){
            var div = tempo / 3;

            $("#vNormal").val(Math.ceil(div));
            $("#vSlow").val(Math.round(div));
            $("#vFast").val(Math.floor(div));
        }
    })

    $("#vNormal").change(function(){
        var vNormal = $("#vNormal").val();
        var vFast = $("#vFast").val();
        var vSlow = $("#vSlow").val();
        var total =  +vNormal + +vFast + +vSlow;
        $("#tempo").val(total);
    })

    $("#vFast").change(function(){
        var vNormal = $("#vNormal").val();
        var vFast = $("#vFast").val();
        var vSlow = $("#vSlow").val();
        var total =  +vNormal + +vFast + +vSlow;
        $("#tempo").val(total);
    })
    $("#vSlow").change(function(){
        var vNormal = $("#vNormal").val();
        var vFast = $("#vFast").val();
        var vSlow = $("#vSlow").val();
        var total =  +vNormal + +vFast + +vSlow;
        $("#tempo").val(total);
    })

</script>

<style>
    body{
        background: #373e46 !important;
    }
    .bubbly-button {
        margin: 1rem;
    font-family: "Helvetica", "Arial", sans-serif;
    display: inline-block;
    font-size: 1em;
    padding: 1em 2em;
    /*
    margin-top: 100px;
    margin-bottom: 60px;
    */
    -webkit-appearance: none;
    appearance: none;
    /* background-color: #00cffc; */
    border: 3px solid #00cffc;
    color: #fff;
    border-radius: 4rem;
    /* border: none; */
    cursor: pointer;
    position: relative;
    transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
    box-shadow: 0 2px 25px rgb(0 207 252 / 39%);
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 1.5rem;
}
.pai{
    display: flex;
    align-items: center;
    align-content: center;
    height: 8rem;
}
.settings{
    display:flex;
    color:white;
    text-align:center;
    align-items: center;
    background-color:#272727;
    justify-content: flex-end;
    margin-bottom:1rem;
}
a {
    all: unset;
    display: flex;
    align-items: center;
    cursor:pointer;
}
</style>
</html>
