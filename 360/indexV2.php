<?php
    include('class.php');
    if (!isset($_GET['evento'])){
        echo '<script>window.location.href = "eventos.php";</script>';exit;
    }else{
        $evento = $_GET['evento'];
    }
    $path = "../videoSpinAPI/eventos/".$evento."/";       

    function dados($str){
        $json = file_get_contents("/var/www/html/360Linux/360/data.json");
    
        $data = json_decode($json);
        
        
        foreach ($data as $key => $value) {
            if ($key == $str){
                
                return $value;
            }
        }
    }    

        
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="icon" type="image/png" href="/360Linux/360/img/favicon.png">
    <script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
    <script type="text/javascript" src="js/qrcode.js?teste=2"></script>
    <link href="css/style.css?teste=<?php echo date('ymdis'); ?>" rel="stylesheet">


    <link rel="stylesheet" href="css/jquery-confirm.css">
    <script src="js/jquery-confirm.js"></script>

    <title>360 - <?php echo corrigeNome($evento); ?></title>
    <script>
        
        conta = 0;
        function gerar(address,key){

            $('#'+key).empty();

            $('#'+key).qrcode({text: address});
        }
        function contar(qt){
            //console.log('Conta: '+ conta + ', Qt: ' + qt)
            if (qt > conta){
                conta = qt;
                $("#qtdadeVideos").html(qt);
            }
        }

        function atualizaVideos(){

            $("#status").load("script.php?contaVideos=1&evento=<?php echo clean($evento) ?> ");
        }
        setInterval(atualizaVideos, 3000);

</script>
</head>
<body id="body" style="background-color:<?php echo $data->estilo; ?> !important">
    
<?php include('topo.php');?>
<div class="logo" onclick="full();"></div>
<div class="main flex w-100 coluna text-white hCenter vCenter">
    <div class="logoEspaco">
        
    </div>
    <div class="qrcodeMain flex hCenter vCenter">
        Escaneie o QRCode<br>para baixar seus videos
        <div class="borda">
            <div class="" id="qrcode">
                
            </div>
        </div>
    </div>
</div>

<div class="zoom" style="z-index:1000">
    <div onclick="full();" id="full"><img src="img/full.png"></div>
    <div onclick="full();" id="fullE"style="display:none;"><img src="img/fullE.png"></div>
</div>


<div id="status"></div>
</body>
</html>

<style>
    
</style>

<script>
    

    function requestFullScreen(element) {
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
    
    
    //var elem = document.body; // Make the body go full screen.
    //requestFullScreen(elem);
    toggleFullScreen();
}



function toggleFullScreen(teste) {
    
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
    $("#full").hide();
    $("#fullE").show();
    $(".topo").hide();
    $(".logo").css("top","0px");
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    $("#full").show();
    $("#fullE").hide();
    $(".topo").show();
    $(".logo").css("top","56px");
  }
}


mostra = 1;
$(".eventoTitulo").click(function(){
    
    if (mostra = 1){
        $(".eventoTitulo").css('color',"#272727");
        $(".eventoTitulo").css('text-shadow',"none");
        mostra = 0;
    }else{
        $(".eventoTitulo").css('color',"white");
        $(".eventoTitulo").css('text-shadow',"3px 4px 4px black");
        mostra = 1;
    }
});


gerar("<?php echo 'http://'.dados('ip').'/360Linux/360/index.php?indexV2Videos='.$evento ?>","qrcode"); 

</script>

<style>
    html,
    body {
        margin: 0;
        padding: 0;
        background-color:white !important;
    }

    /* use viewport-relative units to cover page fully */
    body {
    height: 90vh;
    width: 100vw;
    }

    /* include border and padding in element width and height */
    * {
    box-sizing: border-box;
    }

    /* full-sized  container that fills up the page */
    .main {
        height: 100%;
        width: 100%;

        /* example padding, font-size, background, etc */
        padding: 10px;
        font-size: 20px;
        
    }
    .logo{
        position: absolute;
        left:0;
        top: 56px;
        width:100%;
        height:100%;
        background-image: url('img/moldura.jpg');
        background-position-x: center;
        background-repeat: no-repeat;
        background-size: contain;
        z-index:1;
    }
    .logoEspaco{
        width: 100%;
        height: 50%;
    }
    .qrcodeMain{
        height: 50%;
        z-index: 500;
        flex-wrap: wrap;
        flex-direction: column;
        color: #666666;
        text-align: center;
        font-family: 'Roboto';
    }
    .borda{
        border: 3px solid white;
        padding: 1rem;
    }
    canvas{
        width: 100% !important;
        padding: 0 !important;
        border-bottom: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
    }
    #qrcode{
        border: 10px solid white;
    }
    .topo{
        z-index:500;
    }
    .zoom{
        z-index: 501;
        position: absolute;
        right: 10px;
        top :5px;
    }
</style>