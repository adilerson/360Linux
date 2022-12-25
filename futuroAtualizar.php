<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/360Linux/360/css/style.css" rel="stylesheet">
    <script type="text/javascript" src="/360Linux/360/js/jquery-2.2.4.min.js"></script>
    <title>Atualização360</title>
</head>
<body style="color: white;">

<div class="flex hCenter vCenter mt-3">
    <div class="btn atualizar">Atualizar</div>
</div>
<div class="aviso fs-15 text-center">Este processo pode levar vários minutos, não desligue o computador ou o wifi no meio deste processo!<div class="progresso mt-1 text-center">
    <div class="progressoAtual" style="width:1px;"></div>
</div>
<div id="status" style="opacity: 0"></div>
</body>

<script>
    function atualiza(){
        $("#status").load("script.php?progresso=1");

    }
    function aplica(total){
        //console.log("Vai: " + total);
        $(".progressoAtual").css("width",total + "%");
        $(".progressoAtual").html(total + "%");
    }
    setInterval(atualiza, 1000);


    $(".atualizar").click(function(){
        
        $("#status").load("script.php?atualizar=1");
    });

</script>

</html>
<style>
    .progresso{
        width:100%;
        border: 1px solid white;
        height:2rem;
        border-radius: 0.2rem;
    }
    .progressoAtual{
        background-color:#368f19;
        /*width: 10%;*/
        height: 2rem;
        border-radius: 0.1rem;
        font-size: 1.2rem;
        color:white;
        display:flex;
        justify-content: center;
        align-items: center;
    }

</style>