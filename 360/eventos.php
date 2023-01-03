<?php
include("class.php");
//include("env.php");

function dados($str){
    $json = file_get_contents("/var/www/html/360Linux/360/data.json");

    $data = json_decode($json);
    
    
    foreach ($data as $key => $value) {
        if ($key == $str){
            
            return $value;
        }
    }
}




if (!is_dir("/360Linux/videoSpinAPI/eventos")){
    mkdir("/360Linux/videoSpinAPI/eventos", 0777);    
}
if (!is_dir("/360Linux/videoSpinAPI/config")){
    mkdir("/360Linux/videoSpinAPI/config", 0777);    
}

if (!is_dir("/360Linux/videoSpinAPI/audio")){
    mkdir("/360Linux/videoSpinAPI/audio", 0777);    
}

if (!is_dir("/360Linux/videoSpinAPI/frame")){
    mkdir("/360Linux/videoSpinAPI/frame", 0777);    
}

if (!file_exists("/360Linux/videoSpinAPI/config/evento/evento.json")){
$evento =
    '[
        {
        "nome": "null",
        "tempo": "12",
        "frameName": "null",
        "audioName": "null",
        "data": "2022-12-04",
        "videoInput": "",
        "vNormal": "5",
        "vSlow": "3",
        "vFast": "4",
        "cFast":"0.5",
        "cSlow":"4.0",
        "position": "top"
        }
        ]
    ';

    $file = 'evento.json';
    file_put_contents($file, $evento);

}



    
    if (isset($_POST['nomeoriginal_a']))
    {
        

        $file = "../videoSpinAPI/config/evento/evento.json";
        $json =  json_decode(file_get_contents($file),true);

        foreach($json as $key => $value){
            if ($key == $_POST['key']){   
                unset($json[$key]);
            }
            
        }
        
        if (is_dir("../videoSpinAPI/eventos/".$_POST['nomeoriginal_a'])){
            $nomeNovo = $_POST['nomeoriginal_a'];
            if (is_dir("videos/lixeira/".$_POST['nomeoriginal_a'])){
                $nomeNovo = $_POST['nomeoriginal_a'].'-'.date("ymdhi");
            }else{
                $nomeNovo = $_POST['nomeoriginal_a'].'-'.date("ymdhi");
                mkdir("videos/lixeira/".$nomeNovo);
            }
            //echo "../videoSpinAPI/eventos/".$_POST['nomeoriginal_a'];exit;
            if (rename("../videoSpinAPI/eventos/".$_POST['nomeoriginal_a'], "videos/lixeira/".$nomeNovo)){
                //echo "../videoSpinAPI/eventos/".$_POST['nomeoriginal_a'] . " - " .  "videos/lixeira/".$_POST['nomeoriginal_a']; exit;
                $sucesso[] = 'Evento <strong>'.$_POST['edit_nome'].'<strong> Enviado para lixeira';
            }else{
                $erro[] = 'Erro ao encontrar a pasta do evento <strong>'.$_POST['edit_nome'].'<strong>';
            }
        }
        
        file_put_contents($file, json_encode($json));
        
    }


    if (isset($_POST['atualizar'])){

        $file = "../videoSpinAPI/config/evento/evento.json";
        $json =  json_decode(file_get_contents($file),true);
        $evento = clean($_POST['edit_nome']);
        

        if (strlen($_FILES['edit_frameName']['name']) > 0)
        {
            $pasta = "../videoSpinAPI/config/frame/";

            $nome_frameName    = $_FILES['edit_frameName']['name'];
            $tamanho_frameName = $_FILES['edit_frameName']['size'];
            
            
            $nome_atual_frame = $evento.'.png';
            $nome_atual_frame_sem = $evento;
            
            
            $tmp = $_FILES['edit_frameName']['tmp_name'];
            

            if(move_uploaded_file($tmp,$pasta.$nome_atual_frame)){
                
            }else{
                $erro[] =  "Falha ao enviar a foto ";
                
            }
            
        }
        
        if (!isset($erro)){
            if (strlen($_FILES['edit_audioName']['name']) > 0)
            {

                $pasta = "../videoSpinAPI/config/audio/";
                $permitidos = array(".png");	

                $nome_audioName    = $_FILES['edit_audioName']['name'];
                $tamanho_audioName = $_FILES['edit_audioName']['size'];
                
                $nome_atual_audio = $evento.'.mp3';
                $nome_atual_audio_sem = $evento;
                $tmp = $_FILES['edit_audioName']['tmp_name'];
                

                if(move_uploaded_file($tmp,$pasta.$nome_atual_audio)){
                    
                }else{
                    $erro[] =  "Falha ao enviar o audio";
                    
                }
                

            }
        }

        foreach($json as $key => $value){
            if ($key == $_POST['key']){                
                $json[$key]['nome'] = corrigeNome($_POST['edit_nome']);
                $json[$key]['tempo'] = $_POST['edit_tempo'];
                $json[$key]['vNormal'] = $_POST['edit_vNormal'];
                $json[$key]['vSlow'] = $_POST['edit_vSlow'];
                $json[$key]['vFast'] = $_POST['edit_vFast'];
                $json[$key]['cSlow'] = $_POST['edit_cSlow'];
                $json[$key]['cFast'] = $_POST['edit_cFast'];
                $json[$key]['posicao'] = $_POST['edit_position'];
            }

        }


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
            $erro[] =  "Evento '$evento' já existente";

        }else{

            $nome_atual_frame = 'null';
            $nome_atual_frame_sem = 'null';
            $nome_atual_audio = 'null';
            $nome_atual_audio_sem = 'null';

            
            if (strlen($_FILES['frameName']['name']) > 0)
            {
                
                $pasta = "../videoSpinAPI/config/frame/";

                $nome_frameName    = $_FILES['frameName']['name'];
                $tamanho_frameName = $_FILES['frameName']['size'];
                
                
                $nome_atual_frame = $evento.'.png';
                $nome_atual_frame_sem = $evento;
                
                
                $tmp = $_FILES['frameName']['tmp_name'];
                
                

                if(move_uploaded_file($tmp,$pasta.$nome_atual_frame)){
                    
                }else{
                    $erro[] =  "Falha ao enviar a foto ";
                    
                }
            }

            
            if (!isset($erro)){
                if (strlen($_FILES['audioName']['name']) > 0)
                {
                    

                    $pasta = "../videoSpinAPI/config/audio/";
                    $permitidos = array(".png");	

                    $nome_audioName    = $_FILES['audioName']['name'];
                    $tamanho_audioName = $_FILES['audioName']['size'];
                    
                    $nome_atual_audio = $evento.'.mp3';
                    $nome_atual_audio_sem = $evento;
                    $tmp = $_FILES['audioName']['tmp_name'];
                    

                    if(move_uploaded_file($tmp,$pasta.$nome_atual_audio)){
                        
                    }else{
                        $erro[] =  "Falha ao enviar o audio";
                        
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
                                "frameName" => "$nome_frameName",
                                "audioName" => "$nome_audioName",
                                "data" => date('Y-m-d'),
                                "videoInput" => "",
                                "vNormal" => $_POST['vNormal'],
                                "vSlow" => $_POST['vSlow'],
                                "vFast" => $_POST['vFast'],
                                "cSlow" => $_POST['cSlow'],
                                "cFast" => $_POST['cFast'],
                                "position" => $_POST['position']
                                
                        );
                
                //print_r($json);exit;

                $oldmask = umask(0);

                
                
                mkdir("../videoSpinAPI/eventos/".$evento, 0777);
                umask($oldmask);
                file_put_contents($file, json_encode($json));
                
            
        }
    }
}

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/360Linux/360/img/favicon.png">
    <link href="css/style.css?teste=<?php echo date('ymdis'); ?>" rel="stylesheet">
    <script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
    <link rel="stylesheet" href="css/jquery-confirm.css">
    <script src="js/jquery-confirm.js"></script>
    <title>360BR</title>
</head>
<body>

<div class="topo">
    <div class="home" id="home">
        <a href="/"><img src="img/home.png"></a>
    </div>
    <div class="eventoTitulo">
        Eventos
    </div>  
    <div class="text-center transition flex"><img src="img/refresh.png" id="atualizar" class="transition" style="padding:0;background-color: #56baed;display:none;"></div>
</div>
    <?php include('msg.php'); ?>
    <div class="settings">
        <!--<a href="enviar.php">
            Envio de Audios e Molduras
            <img src="img/uploadW.png">
        </a>-->
    </div>

    <div style="color:white; font-size:1rem">
        <form method="post" action="eventos.php" enctype="multipart/form-data">
            <div class="inputs">
                <label class="branco label" for="nome">Nome</label><input type="text" size="10" name="nome" id="nome" required>
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
            <div class="inputs fs-1 vCenter">
                <label class="branco label" for="tempo">Tempo Total</label><input type="number" name="tempo" min="5" max="30" id="tempo" value="<?php echo dados('record'); ?>" required style="margin-right: 0.25rem;">Segundos
            </div>
            <div class="inputs">
                <label class="branco label esquerda" for="vNormal">&nbsp;&nbsp;&nbsp;&nbsp;Normal</label><input type="number" min="0" max="30" size="2" name="vNormal" id="vNormal" value="<?php echo dados('normal'); ?>" required>
            </div>
            
            <div class="inputs">
                <label class="branco label esquerda" for="vSlow">&nbsp;&nbsp;&nbsp;&nbsp;Slow</label><input type="number" min="0" max="30" name="vSlow" id="vSlow" value="<?php echo dados('slow'); ?>" style="width: 3rem;margin-right: 0.25rem;" required >
                <select name="cSlow" id="cSlow">
                    <option value="1.5">Baixo</option>
                    <option value="2.0">Médio</option>
                    <option value="3.0">Alto</option>
                    <option value="4.0">SuperSlow</option>
                    <option value="5.0">UltraSlow</option>
                </select>
            </div>
            
            <div class="inputs">
                <label class="branco label esquerda" for="vFast">&nbsp;&nbsp;&nbsp;&nbsp;Fast</label><input type="number" min="0" max="30" name="vFast" id="vFast" value="<?php echo dados('fast'); ?>" style="width: 3rem;margin-right: 0.25rem;" required>
                <select name="cFast" id="cFast">
                    <option value="0.6">Baixo</option>
                    <option value="0.5">Médio</option>
                    <option value="0.4">Alto</option>
                    <option value="0.3">SuperFast</option>
                </select>
            </div>
           

            <div class="inputs">
                
                <label class="branco label" for="position">Posição dos Botões</label>
                <select name="position" id="position">
                    <option value="top">Topo</option>
                    <option value="center">Centro</option>
                    <option value="bottom">Rodapé</option>
                </select>

            </div>
            <div id="tempoTotal" class="flex w-100 text-center hCenter fs-15 p-05"></div>
            <div class="botaoIncluir flex hCenter">
                <input type="submit" class="btn" value="Incluir" id="Incluir">
            </div>
        </form>
    </div>
    <div class="dividir"></div>
    <?php


    $file = "../videoSpinAPI/config/evento/evento.json";
    $json = (object) json_decode(file_get_contents($file),true);
    
    
    echo '<div id="status"></div>
    <div class="arquivoDownload"><a href="arquivos360.zip" class="fs-1">Baixar Arquivo</a></div>';
    echo '<div class="eventosBtn">';
    $str = '';
    foreach($json as $key => $value){    
        $value = (object) $value;
        
       if ($value->nome == 'null'){continue;}
        if ($value->audioName == ''){
            $value->audioName = 'null';
        }
        if ($value->frameName == ''){
            $value->frameName = 'null';
        }

        $str = '
        <div class="pai">
            <div class="link bubbly-button flex hCenter vCenter" >
                <div>
                    <a href="index.php?evento='.$value->nome.'" style="">'.ucfirst(corrigeNome($value->nome)).'</a>
                </div>
                    <img src="img/settingsw.png" class="m-s1 editarEvento" nome="'.corrigeNome($value->nome).'" key="'.$key.'" nomeoriginal="'.clean($value->nome).'" framename="'.$value->frameName.'" audioname="'.$value->audioName.'" tempo="'.$value->tempo.'" vnormal="'.$value->vNormal.'" vslow="'.$value->vSlow.'" vfast="'.$value->vFast.'" cfast="'.$value->cFast.'" cslow="'.$value->cSlow.'">
                <div>
                </div>
                <div>
                    <img src="img/download.png" class="m-s1 downALL" nome="'.corrigeNome($value->nome).'" nomereal="'.$value->nome.'" key="'.$key.'">
                </div>
                
            </div>        
        </div>'.$str;
    }
    echo $str.'</div>';
    ?>

     
<div id="myModal" class="modal">
  
    <div class="modal-content flex">
      <div class="fecharModal">
          <span class="close" style="font-size: 3rem;height: 3rem !important;">&times;</span>
      </div>
    <div style="color:white;">
        <form method="post" id="form_edit" action="eventos.php" enctype="multipart/form-data">
            <input type="hidden" name="nomeoriginal" id="nomeoriginal">
            <input type="hidden" name="key" id="key">
            <div class="inputs">
                <label class="branco label" for="edit_nome">Nome</label><input type="text" name="edit_nome" id="edit_nome" class="w-100">
            </div>
            
            <div class="inputs">
                <label class="branco label" for="edit_frameName">Moldura</label><input type="file" accept="image/png" name="edit_frameName" id="edit_frameName">
            </div>
            <div class="inputs">
                <label class="branco label" for="edit_audioName">Áudio</label><input type="file" accept="audio/mp3" name="edit_audioName" id="edit_audioName">
            </div>
            <div class="inputs">
                <label class="branco label" for="edit_tempo">Tempo Total</label><input type="number" name="edit_tempo" min="5" max="30" id="edit_tempo" required>
            </div>
            <div class="inputs">
                <label class="branco label esquerda" for="edit_vNormal">&nbsp;&nbsp;&nbsp;&nbsp;Normal</label><input type="number" min="0" max="30" name="edit_vNormal" id="edit_vNormal" required>
            </div>
            <div class="inputs">
                <label class="branco label esquerda" for="edit_vSlow">&nbsp;&nbsp;&nbsp;&nbsp;Slow</label><input type="number" min="0" max="30" name="edit_vSlow" id="edit_vSlow" required>
                <select name="edit_cSlow" id="edit_cSlow">
                    <option value="1.5">Baixo</option>
                    <option value="2.0">Médio</option>
                    <option value="3.0">Alto</option>
                    <option value="4.0">SuperSlow</option>
                    <option value="5.0">UltraSlow</option>
                </select>
            </div>
            
            <div class="inputs">
                <label class="branco label esquerda" for="edit_vFast">&nbsp;&nbsp;&nbsp;&nbsp;Fast</label><input type="number" min="0" max="30" name="edit_vFast" id="edit_vFast" required>
                <select name="edit_cFast" id="edit_cFast">
                    <option value="0.6">Baixo</option>
                    <option value="0.5">Médio</option>
                    <option value="0.4">Alto</option>
                    <option value="0.3">SuperFast</option>
                </select>
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
            <input type="submit" class="btn btnModal" value="Atualizar" name="atualizar">
        </form>
            <form method="post" id="form_lixeira" action="eventos.php" style="margin: 0rem;width: 100%;display: flex;justify-content: center;">
                <input type="hidden" name="nomeoriginal_a" id="nomeoriginal_a">
                <input type="hidden" name="key" id="key_a">
                <input type="submit" class="btn btn-danger lixeira btnModal" value="Lixeira" name="lixeira" id="lixeira">
            </form>
        </div>
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
    $("#edit_cSlow").val($(this).attr("cSlow"));
    $("#edit_cFast").val($(this).attr("cfast"));
    $("#nomeoriginal").val($(this).attr("nomeoriginal"));
    $("#nomeoriginal_a").val($(this).attr("nomeoriginal"));
    $("#key").val($(this).attr("key"));
    $("#key_a").val($(this).attr("key"));

    
        
});

    /*
    if ($("#tempo").val() == ''){
        $("#tempo").val("12");
        $("#vNormal").val("5");
        $("#vFast").val("4");
        $("#vSlow").val("3");
    }
    */

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
        calculaTempo();
    })

    $("#vFast").change(function(){
        var vNormal = $("#vNormal").val();
        var vFast = $("#vFast").val();
        var vSlow = $("#vSlow").val();
        var total =  +vNormal + +vFast + +vSlow;
        $("#tempo").val(total);
        calculaTempo();
    })
    $("#vSlow").change(function(){
        var vNormal = $("#vNormal").val();
        var vFast = $("#vFast").val();
        var vSlow = $("#vSlow").val();
        var total =  +vNormal + +vFast + +vSlow;
        $("#tempo").val(total);
        calculaTempo();
    })

    $("#cSlow").change(function(){
        calculaTempo();
    })
    $("#cFast").change(function(){
        calculaTempo();
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
        calculaTempo();
    })

    $("#edit_vFast").change(function(){
        var vNormal = $("#edit_vNormal").val();
        var vFast = $("#edit_vFast").val();
        var vSlow = $("#edit_vSlow").val();
        var total =  +vNormal + +vFast + +vSlow;
        $("#edit_tempo").val(total);
        calculaTempo();
    })
    $("#edit_vSlow").change(function(){
        var vNormal = $("#edit_vNormal").val();
        var vFast = $("#edit_vFast").val();
        var vSlow = $("#edit_vSlow").val();
        var total =  +vNormal + +vFast + +vSlow;
        $("#edit_tempo").val(total);
        calculaTempo();
    })


$(".downALL").click(function (){
    var evento = $(this).attr("nomereal");
    console.log("baixaTudo.php?evento="+ evento);
    $("#status").load("baixaTudo.php?evento="+ evento);
    
});

$(".arquivoDownload").slideUp();




$("#lixeira").click(function(){
$( "#target" ).submit();
    $.confirm({
        title: 'Excluir',
        content: 'Tem certeza que deseja excluir o item '+$("#edit_nome").val(),
        buttons: {
            /*
            Sim: function () {
                $.alert('Excluído!');
            },*/
            
            Cancelar: function () {
                //$.alert('Canceled!');
            },
            somethingElse: {
                text: 'Excluir',
                btnClass: 'btn-red',
                keys: ['enter', 'shift'],
                action: function(){
                    console.log('Fez');
                    $('#form_lixeira').submit();

                    //$.alert('Excluído com sucesso');
                }
            }
        }
    });
    event.preventDefault();
});



$( "#form_lixeira" ).submit(function( event ) {
   
    //confirma(evento);
});

function calculaTempo(){
    var vNormal = $("#vNormal").val();
    var vSlow = $("#vSlow").val();
    var vFast = $("#vFast").val();

    var cSlow = $("#cSlow").val();
    var cFast = $("#cFast").val();
    
    var tSlow = vSlow * cSlow;
    var tFast = vFast * cFast;
    //console.log(cSlow,cFast);
    var tTotal = +tSlow + +tFast + +vNormal;
    tTotal = tTotal * 2;
    $("#tempoTotal").html('<div class="tituloSegundos">Tempo Final: </div><div class="segundos">' + tTotal + '</div><div class="bold">segundos</div>');



}
calculaTempo();

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
    -webkit-appearance: none;
    appearance: none;
    border: 3px solid #00cffc;
    color: #fff;
    border-radius: 0.4rem;
    cursor: pointer;
    position: relative;
    transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
    box-shadow: 0 2px 8px rgb(0 207 252 / 38%);
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
.eventosBtn{
    display: flex;
    flex-wrap: wrap;
}
.arquivoDownload{
    position: absolute;
    bottom: 1px;

    width: 91%;
    border-radius: 1.1rem 1.5rem 0rem 0rem;
    background-color: #00000042;
    margin: 0 !important;
}
.modal-content{
    padding : 0;
}
input, select{
    width: 100% !important;
}
.btnModal{
    width: 50%;
    text-align: center;
    padding: 0.5rem;
    margin: 0.5rem;
}
.segundos{
    margin-right:0.4rem;
}
.tituloSegundos{
    margin-right:0.4rem;
}
#tempoTotal{
    color: #ada !important;
}
</style>
</html>
