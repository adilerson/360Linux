<?php
    include('class.php');
    
    if (isset($_POST['lixeira']))
    {

        $file = "../videoSpinAPI/config/evento/evento.json";
        $json =  json_decode(file_get_contents($file),true);

        
        foreach($json as $key => $value){
            if ($key == $_POST['key']){   
                
                unset($json[$key]);
            }
            
        }
        
        if (is_dir("../videoSpinAPI/eventos/".$_POST['nomeoriginal'])){
            $nomeNovo = $_POST['nomeoriginal'];
            if (is_dir("videos/lixeira/".$_POST['nomeoriginal'])){
                $nomeNovo = $_POST['nomeoriginal'].'-'.date("ymdhi");
            }
            if (rename("../videoSpinAPI/eventos/".$_POST['nomeoriginal'], "videos/lixeira/".$_POST['nomeoriginal'])){
                $sucesso[] = 'Evento <strong>'.$_POST['edit_nome'].'<strong> Enviado para lixeira';
            }else{
                $erro[] = 'Erro ao encontrar a pasta do evento <strong>'.$_POST['edit_nome'].'<strong>';
            }
        }
        
        file_put_contents($file, json_encode($json));

    }


    if (isset($_POST['atualizar'])){
        //echo $_POST['nomeoriginal'];


        $file = "../videoSpinAPI/config/evento/evento.json";
        $json =  json_decode(file_get_contents($file),true);
        

        foreach($json as $key => $value){
            if ($key == $_POST['key']){                
                $json[$key]['nome'] = corrigeNome($_POST['edit_nome']);
                $json[$key]['tempo'] = $_POST['edit_tempo'];
                $json[$key]['vNormal'] = $_POST['edit_vNormal'];
                $json[$key]['vSlow'] = $_POST['edit_vSlow'];
                $json[$key]['vFast'] = $_POST['edit_vFast'];
                $json[$key]['posicao'] = $_POST['edit_position'];
            }

        }
        

        //echo $_POST['nomeoriginal'].' - '.clean($_POST['edit_nome']).'<br>';

        if ($_POST['nomeoriginal'] != clean($_POST['edit_nome'])){
            if (rename("../videoSpinAPI/eventos/".$_POST['nomeoriginal'], "../videoSpinAPI/eventos/".clean($_POST['edit_nome']))){
                $sucesso[] = 'Evento <strong>'.$_POST['edit_nome'].'<strong> Atualizado com sucesso';
            }else{
                $erro[] = 'Erro ao encontrar a pasta do evento <strong>'.$_POST['nomeoriginal'].'<strong>';
            }
        }

        
        file_put_contents($file, json_encode($json));

    }


    if (isset($_POST['nome'])){
        
        $evento = clean($_POST['nome']);

        if (is_dir("../videoSpinAPI/eventos/".$evento)){
            $erro[] =  "Evento já existente";

        }else{

            $nome_atual_frame = 'null';
            $nome_atual_audio = 'null';


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

            
                    $file = "../videoSpinAPI/config/evento/evento.json";
                    $json = json_decode(file_get_contents($file),true);

                    
                    $conta = 0;
                        foreach($json as $key => $val){
                            if ($key > $conta){
                                $conta = $key;
                            }
                        }

                    
                    $conta++;

                        $json[] = array(

                                "nome" => $evento,
                                "tempo" => $_POST['tempo'],
                                "frameName" => "$nome_atual_frame",
                                "audioName" => "$nome_atual_audio",
                                "data" => date('Y-m-d'),
                                "videoInput" => "",
                                "vNormal" => $_POST['vNormal'],
                                "vSlow" => $_POST['vSlow'],
                                "vFast" => $_POST['vFast'],
                                "position" => $_POST['position']
                                
                        );
                
                

                mkdir("../videoSpinAPI/eventos/".$evento);
                file_put_contents($file, json_encode($json));
                
            
        }
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
                echo '<div class="p-2 w-100 bg-danger text-white fs-15 text-center">'.$val.'</div>';
            }
        }
        if (isset($sucesso)){
            foreach($sucesso as $val)
            {
                echo '<div class="p-2 w-100 bg-success text-white fs-15 text-center">'.$val.'</div>';
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
                <label class="branco label" for="tempo">Tempo Total</label><input type="number" name="tempo" min="5" max="30" id="tempo" required>
            </div>
            <div class="inputs">
                <label class="branco label esquerda" for="vNormal">&nbsp;&nbsp;&nbsp;&nbsp;Normal</label><input type="number" min="0" max="30" name="vNormal" id="vNormal" required>
            </div>
            <div class="inputs">
                <label class="branco label esquerda" for="vSlow">&nbsp;&nbsp;&nbsp;&nbsp;Slow</label><input type="number" min="0" max="30" name="vSlow" id="vSlow" required>
            </div>
            <div class="inputs">
                <label class="branco label esquerda" for="vFast">&nbsp;&nbsp;&nbsp;&nbsp;Fast</label><input type="number" min="0" max="30" name="vFast" id="vFast" required>
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


    $file = "../videoSpinAPI/config/evento/evento.json";
    $json = (object) json_decode(file_get_contents($file),true);
    
    
       

    foreach($json as $key => $value){    
        $value = (object) $value;
        
       if ($value->nome == 'null'){continue;}
        if ($value->audioName == ''){
            $value->audioName = 'null';
        }
        if ($value->frameName == ''){
            $value->frameName = 'null';
        }

        echo '
        <div class="pai">
            <div class="link bubbly-button flex" >
                <a href="index.php?evento='.$value->nome.'" style="">'.corrigeNome($value->nome).'</a>
                <img src="img/settingsW.png" class="m-s1 editarEvento" nome="'.corrigeNome($value->nome).'" key="'.$key.'" nomeoriginal="'.clean($value->nome).'" framename="'.$value->frameName.'" audioname="'.$value->audioName.'" tempo="'.$value->tempo.'" vnormal="'.$value->vNormal.'" vslow="'.$value->vSlow.'" vfast="'.$value->vFast.'">
            </div>        
        </div>';
    }

    ?>

     
<div id="myModal" class="modal">
  
    <div class="modal-content flex">
      <div class="fecharModal">
          <span class="close" style="height: 3rem !important;">&times;</span>
      </div>
    <div style="">
        <form method="post" action="eventos.php" enctype="multipart/form-data">
            <input type="hidden" name="nomeoriginal" id="nomeoriginal">
            <input type="hidden" name="key" id="key">
            <div class="inputs">
                <label class="branco label" for="nome">Nome</label><input type="text" name="edit_nome" id="edit_nome">
            </div>
            
            <div class="inputs">
                <label class="branco label" for="frameName">Moldura</label><input type="file" accept="image/png" name="edit_frameName" id="edit_frameName">
            </div>
            <div class="inputs">
                <label class="branco label" for="audioName">Áudio</label><input type="file" accept="audio/mp3" name="edit_audioName" id="edit_audioName">
            </div>
            <div class="inputs">
                <label class="branco label" for="tempo">Tempo Total</label><input type="number" name="edit_tempo" min="5" max="30" id="edit_tempo" required>
            </div>
            <div class="inputs">
                <label class="branco label esquerda" for="vNormal">&nbsp;&nbsp;&nbsp;&nbsp;Normal</label><input type="number" min="0" max="30" name="edit_vNormal" id="edit_vNormal" required>
            </div>
            <div class="inputs">
                <label class="branco label esquerda" for="vSlow">&nbsp;&nbsp;&nbsp;&nbsp;Slow</label><input type="number" min="0" max="30" name="edit_vSlow" id="edit_vSlow" required>
            </div>
            <div class="inputs">
                <label class="branco label esquerda" for="vFast">&nbsp;&nbsp;&nbsp;&nbsp;Fast</label><input type="number" min="0" max="30" name="edit_vFast" id="edit_vFast" required>
            </div>
            <div class="inputs">
                
                <label class="branco label" for="edit_position">Posição dos Botões</label>
                <select name="edit_position" id="edit_position">
                    <option value="top">Topo</option>
                    <option value="center">Centro</option>
                    <option value="bottom">Rodapé</option>
                </select>

            </div>
            <div class="flex">
                <input type="submit" class="btn" value="Atualizar" name="atualizar">
                <input type="submit" class="btn btn-danger" value="Lixeira" name="lixeira">
            </div>
        </form>
    </div>
    
  </div>
</div>

</body>

<script>


    $(".close").click(function(){
        //$("#videoModal").attr("src","");
        //$("#myModal").fadeOut("50");


            $('#myModal').fadeOut("50");
    });

$(".editarEvento").click(function(){

    $("#myModal").fadeIn("50");
        
    $("#edit_nome").val($(this).attr("nome"));

    $("#edit_tempo").val($(this).attr("tempo"));
    $("#edit_vNormal").val($(this).attr("vnormal"));
    $("#edit_vSlow").val($(this).attr("vslow"));
    $("#edit_vFast").val($(this).attr("vfast"));
    $("#nomeoriginal").val($(this).attr("nomeoriginal"));
    $("#key").val($(this).attr("key"));

    
        
});

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


    $("#edit_tempo").change(function(){
        var tempo = $("#edit_tempo").val();
        if (tempo > 3){
            var div = tempo / 3;

            $("#edit_vNormal").val(Math.ceil(div));
            $("#edit_vSlow").val(Math.round(div));
            $("#edit_vFast").val(Math.floor(div));
        }
    })

    $("#edit_vNormal").change(function(){
        var vNormal = $("#edit_vNormal").val();
        var vFast = $("#edit_vFast").val();
        var vSlow = $("#edit_vSlow").val();
        var total =  +vNormal + +vFast + +vSlow;
        $("#edit_tempo").val(total);
    })

    $("#edit_vFast").change(function(){
        var vNormal = $("#edit_vNormal").val();
        var vFast = $("#edit_vFast").val();
        var vSlow = $("#edit_vSlow").val();
        var total =  +vNormal + +vFast + +vSlow;
        $("#edit_tempo").val(total);
    })
    $("#edit_vSlow").change(function(){
        var vNormal = $("#edit_vNormal").val();
        var vFast = $("#edit_vFast").val();
        var vSlow = $("#edit_vSlow").val();
        var total =  +vNormal + +vFast + +vSlow;
        $("#edit_tempo").val(total);
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
