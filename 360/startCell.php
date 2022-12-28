<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/360Linux/360/img/favicon.png">
    <script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
    <link href="css/style.css?teste=08" rel="stylesheet">
    <title>StartCell 360</title>
</head>

<body>
    <div class="flex collum hCenter">
        <div class="btn naoselecionavel" id="btn">Ligar</div>
    </div>
    <div id="status" style="opacity:0;"></div>

</body>
<script>
    gravando = false;
    $(".btn").click(function(){
        //console.log('clicou');
        if (gravando == false){
            //console.log('gravando');
            $("#status").load("https://192.168.36.36:3000/comando?status=1");
            gravando = true
        }
        
        setTimeout(function ()
        {
            //console.log('desgravando');
            gravando = false;
        }, 2000);
        
    });
</script>
<style>

html{
display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 80vh;
}
.btn{
    font-size: 3rem;
    font-family: 'Roboto';
    text-transform: uppercase;
    font-weight: bold;
}
</style>