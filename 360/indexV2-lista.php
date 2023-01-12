<?php
    include('class.php');

        if (!isset($_GET['evento'])){
            echo '<script>window.location.href = "eventos.php";</script>';

        }else{
            $evento = $_GET['evento'];
        }

        $path = "../videoSpinAPI/eventos/".$evento."/";

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="icon" type="image/png" href="/360Linux/360/img/favicon.png">
    <script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
    
    <link href="css/style.css?teste=<?php echo date('ymdis'); ?>" rel="stylesheet">

    <link rel="stylesheet" href="css/jquery-confirm.css">
    <script src="js/jquery-confirm.js"></script>

    <title>360 - <?php echo corrigeNome($evento); ?></title>
    <script>
        
        conta = 0;
        
        function contar(qt){
            //console.log('Conta: '+ conta + ', Qt: ' + qt)
            if (qt > conta){
                conta = qt;
                $("#atualizar").fadeIn("300");
            }
        }

        function atualizaVideos(){

            $("#status").load("script.php?contaVideos=1&evento=<?php echo clean($evento) ?> ");
        }
        setInterval(atualizaVideos, 3000);

</script>
</head>
<body id="body">
    

<div id="listaVideos">

</div>



<div id="myModal" class="modal">

  
  <div class="modal-content">
    <div>
        <span class="close" onclick="fechar()">&times;</span>
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



<div id="status"></div>
</body>
</html>

<style>
    
</style>

<script>
    
    $("#atualizar").click(function(){

        $("#listaVideos").load("listaVideos.php", {'evento': '<?php echo $evento; ?>','v2':'1'});
        $("#atualizar").fadeOut("50")

    })



$("#listaVideos").load("listaVideos.php", {'maximo':'<?php echo $_GET['maximo']; ?>', 'evento': '<?php echo $evento; ?>','v2':'1'});

function confirma(item){
    $.confirm({
        title: 'Excluir',
        content: 'Tem certeza que deseja excluir o item '+item,
        buttons: {
            /*
            Sim: function () {
                $.alert('Excluído!');
            },
            */
            Cancelar: function () {
                //$.alert('Canceled!');
            },
            somethingElse: {
                text: 'Excluir',
                btnClass: 'btn-red',
                keys: ['enter', 'shift'],
                action: function(){
                    $.alert('Excluído com sucesso');
                }
            }
        }
    });
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



function fechar(){
    var video = document.getElementById("videoModal");
    video.pause();
    $('#videoModal').attr("src","")
$(function() {
    $('#myModal').fadeOut({
        
    }, 50, function() {
        
        
    })
})

}


</script>
