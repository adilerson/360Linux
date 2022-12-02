<?php
    include('class.php');
        


        if (!isset($_GET['evento'])){
            echo '<script>window.location.href = "eventos.php";</script>';

        }else{
            $evento = $_GET['evento'];
        }

        $path = "../videoSpinAPI/dist/media/".$evento."/";

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
    <script type="text/javascript" src="js/qrcode.js?teste=2"></script>
    <link href="css/style.css?teste=3" rel="stylesheet">

    <title>360 - <?php echo corrigeNome($evento); ?></title>
    <script>
        
        
        function gerar(address,key){

            $('#'+key).empty();

            $('#'+key).qrcode({text: address});
        }
        function contar(qt){
            console.log('Conta: '+ conta + ', Qt: ' + qt)
            if (qt > conta){
                conta = qt;
                $("#atualizar").fadeIn("300");
            }
        }

        function atualizaVideos(){

            $("#status").load("script.php?contaVideos=1&evento=<?php echo corrigeNome($evento) ?> ");
        }
        setInterval(atualizaVideos, 3000);

</script>
</head>
<body id="body">
    <div class="topo">
        <div class="home" id="home">
            <img src="img/home.png">
        </div>
        <div class="eventoTitulo"><?php echo ucfirst(corrigeNome($evento)) ?></div>  
</div>
<div id="listaVideos">

</div>


<div id="myModal" class="modal">

  
  <div class="modal-content">
    <div>
        <span class="close">&times;</span>
    </div>
    <div style="text-align: center;">
        <video  class="videoEmbedModal" src="" id="videoModal" controls="controls" autoplay>
    </div>
    <div class="text-center">
        <div id="qrcodeModal" class="qrcode-focado"></div>
    </div>
    </video>
  </div>
</div>

<div onclick="full();" id="full"><img src="img/full.png"></div>
<div onclick="fullE();" id="fullE"style="display:none;"><img src="img/fullE.png"></div>
<div id="status"></div>
</body>
</html>

<style>
    
</style>

<script>
    
    $("#atualizar").click(function(){

        $("#listaVideos").load("listaVideos.php?", {'evento': '<?php echo $evento; ?>'});
            //window.location.reload();
            //openFullscreen()
    })

    function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function full(){
    $("#full").hide();
    $("#fullE").show();
    $("#home").hide();
    
    var elem = document.body; // Make the body go full screen.
    requestFullScreen(elem);
    
}

function fullE() {
    $("#full").show();
    $("#fullE").hide();
    $("#home").show();

    if (document.exitFullscreen) {
                document.exitFullscreen().catch(() => { });
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
}

$("#listaVideos").load("listaVideos.php", {'evento': '<?php echo $evento; ?>'});


</script>
