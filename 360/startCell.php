<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/360Linux/360/img/favicon.ico">
    <script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
    <link href="css/style.css?teste=07" rel="stylesheet">
    <title>StartCell 360</title>
</head>

<body>
    <div class="flex collum hCenter">
        <div class="btn">Ligar</div>
    </div>
    <div id="status"></div>

</body>
<script>
    $(".btn").click(function(){
        $("#status").load("https://192.168.36.36:3000/comando?status=1")
        //$("#status").load("startCellScript.php");
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