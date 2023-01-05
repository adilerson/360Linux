<?php
function dados($str){
        $json = file_get_contents("/var/www/html/360Linux/360/data.json");
        $data = json_decode($json);

        foreach ($data as $key => $value) {
            if ($key == $str){

                return $value;
            }
        }
    }

    $versao = dados('versao');  

    $ip = dados('ip');
    ?>
<!DOCTYPE html>
<html lang="pt-BR" style="background: #373e46 !important;">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/360Linux/360/img/favicon.png">
    <script type="text/javascript" src="/360Linux/360/js/jquery-2.2.4.min.js"></script>
    <script type="text/javascript" src="/360Linux/360/js/qrcode.js?teste=2"></script>
    <link href="/360Linux/360/css/style.css?teste=<?php echo date('ymdis'); ?>" rel="stylesheet">
    <link rel="stylesheet" href="/360Linux/360/css/jquery-confirm.css">
    <script src="/360Linux/360/js/jquery-confirm.js"></script>
    <title>CG360</title>
</head>
<body style="font-family: roboto;">
    <div class="flex hCenter vCenter coluna text-white m-2" style="flex-direction: column;">
        <div class="Botoes">
            <div class="divisao">
                <h1>Celular</h1>
                <div class="fs-1 pb-1">
                    <a href="https://<?php echo $ip; ?>:3000" rel="noopener noreferrer" class="btn">Acessar</a>
                </div>
            </div>

            <div class="divisao">
                <h1>Aparelho Start</h1>
                <div class="fs-1 pb-1">
                    <a href="https://<?php echo $ip; ?>/360Linux/360/startCell.php" rel="noopener noreferrer" class="btn">Abrir</a>
                </div>
            </div>

            <div class="divisao">
                <h1>Tablet</h1>
                <div class="fs-1 pb-1">
                    <a href="https://<?php echo $ip; ?>/360Linux/360/" rel="noopener noreferrer" class="btn">Eventos</a>
                </div>
            </div>
            <div class="divisao">
                <h1>Administrador</h1>
                <div class="flex hCenter wrap">
                    <div class="fs-1">
                        <a href="https://<?php echo $ip; ?>/360Linux/360/config.php" rel="noopener noreferrer" class="btn">Configurações</a>
                    </div>
                    
                    <div class="fs-1">
                        <a href="https://<?php echo $ip; ?>/atualizar.php" rel="noopener noreferrer" class="btn">Atualizações</a>
                    </div>
                    <div class="fs-1">
                        <div class="btn btn-danger desligar">Desligar</div>
                    </div>
                    <div class="fs-1">
                        <div class="btn btn-danger bg-orange reiniciar">Reiniciar</div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div class="des" style="opacity:0;">
        5
    </div>
    <div id="status" style="opacity:0"></div>
</body>

</html>
<script>
    $(".desligar").click(function(){
        $.confirm({
            title: 'Desligar',
            content: 'Tem certeza que deseja desligar o sistema?',
            buttons: {
                /*
                Sim: function () {
                    $.alert('Excluído!');
                },*/
                
                Cancelar: function () {
                    //$.alert('Canceled!');
                },
                somethingElse: {
                    text: 'Desligar',
                    btnClass: 'btn-red',
                    keys: ['enter', 'shift'],
                    action: function(){
                        
                        $('#status').load("script.php?desligar=1");
                        $(".Botoes").fadeOut("2000")
                        $("body").css("overflow","hidden");
                        tempo = 1000;
                        atraso = 650;
                        setTimeout(function(){
                            $(".des").fadeIn("2000");
                        }, tempo);
                        
                            tempo = tempo + atraso;
                        setTimeout(function(){
                            $(".des").fadeOut("2000");
                        }, tempo);
                            tempo = tempo + atraso;
                        setTimeout(function(){
                            $(".des").html("4")
                            $(".des").fadeIn("2000");
                        }, tempo);

                            tempo = tempo + atraso;
                        setTimeout(function(){
                            $(".des").fadeOut("2000");
                        }, tempo);
                            tempo = tempo + atraso;
                        setTimeout(function(){
                            $(".des").html("3")
                            $(".des").fadeIn("2000");
                        }, tempo);
                            tempo = tempo + atraso;
                        setTimeout(function(){
                            $(".des").fadeOut("2000");
                        }, tempo);
                            tempo = tempo + atraso;
                        setTimeout(function(){
                            $(".des").html("2")
                            $(".des").fadeIn("2000");
                        }, tempo);
                            tempo = tempo + atraso;
                        setTimeout(function(){
                            $(".des").fadeOut("2000");
                        }, tempo);
                            tempo = tempo + atraso;
                        setTimeout(function(){
                            $(".des").html("1")
                            $(".des").fadeIn("2000");
                        }, tempo);
                            tempo = tempo + atraso;
                        setTimeout(function(){
                            $(".des").fadeOut("3000");
                        }, tempo);
                        tempo = tempo + atraso;
                        
                        setTimeout(function(){
                            $(".des").css("font-size","3rem");
                            $(".des").html("Sistema desligado<br>com sucesso!")
                            $(".des").fadeIn("2000");
                        }, tempo);
                            
                    }
                }
            }
        });
    })
    conta = 20;

    $(".reiniciar").click(function(){
        $.confirm({
            title: 'Reiniciar',
            content: 'Tem certeza que deseja reiniciar o sistema?',
            buttons: {
                
                Cancelar: function () {
                    
                },
                somethingElse: {
                    text: 'Reiniciar',
                    btnClass: 'btn-red',
                    keys: ['enter', 'shift'],
                    action: function(){
                        
                        $('#status').load("script.php?reiniciar=1");
                        $(".Botoes").fadeOut("2000")
                        $("body").css("overflow","hidden");
                        
                        setTimeout(function(){
                            $(".des").html("")
                            $(".des").fadeIn("2000");
                            conta = 23;
                            myLoop();
                        }, 1000);
                        
                    
                            
                    }
                }
            }
        });
    })
    
    

function myLoop() {
  setTimeout(function() {
    $(".des").html('<div style="flex-wrap: wrap;"><div>Sitema reinciando... </div><div> Reativa em ' + conta + ' segundos</div>')

    console.log(conta);

    conta--;                    //  increment the counter
    if (conta >= 0) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }  else{
        $(".Botoes").fadeIn("2000");
        $(".des").fadeOut("2000");
    }                     //  ..  setTimeout()
  }, 1000)
}

   

</script>

<style>
    h1{
        margin-top:1.5rem;
        margin-bottom:0rem;
        text-align:center;
    }
    .divisao{
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #818181;
        border-radius: 1rem;
    }
    .des{
        font-size: 6rem;
        position: absolute;
        width: 100%;
        text-align: Center;
        display: flex;
        align-items: center;
        justify-content: center;
        /*height: 80vh;*/
        color: #dbdbdb;
    }
</style>
<script>
    $(".des").fadeOut("0")
    setTimeout(function(){
        $(".des").css("font-size","6rem");
        $(".des").css("height","80vh");
        $(".des").css("opacity","1");
    }, 1000);
</script>