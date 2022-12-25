<?php 
    include('360Linux/360/env.php');
    $ip = dados('ip');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="360Linux/360/js/jquery-2.2.4.min.js"></script>
    <script type="text/javascript" src="360Linux/360/js/qrcode.js?teste=2"></script>
    <link href="360Linux/360/css/style.css" rel="stylesheet">
    <title>CG360</title>
</head>
<body style="font-family: roboto;">
    <div class="flex hCenter vCenter coluna text-white m-2" style="flex-direction: column;">
        <h1>Celular</h1>
        <div class="fs-1 p-1">
            <a href="https://<?php echo $ip; ?>:3000" target="_blank" rel="noopener noreferrer" class="btn">Passo 1</a>
        </div>
        <div class="fs-1 p-1">
            <a href="https://<?php echo $ip; ?>/360Linux/front" target="_blank" rel="noopener noreferrer" class="btn">Passo 2</a>
        </div>

        <h1>Aparelho Start</h1>
        <div class="fs-1 p-1">
            <a href="http://<?php echo $ip; ?>/360Linux/360/startCell.php" target="_blank" rel="noopener noreferrer" class="btn">Abrir</a>
        </div>

        <div class="divisao"></div>

        <h1>Admin</h1>
        <div class="fs-1 p-1">
            <a href="http://<?php echo $ip; ?>/360Linux/360/" target="_blank" rel="noopener noreferrer" class="btn">Eventos</a>
        </div>

        <div class="fs-1 p-1">
            <a href="http://<?php echo $ip; ?>/360Linux/360/config.php" target="_blank" rel="noopener noreferrer" class="btn">Configurações</a>
        </div>
    </div>
</body>
</html>
