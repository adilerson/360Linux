<?php
$command = 'sudo python3 /var/www/html/360Linux/360/begin.py';
exec($command, $out, $status);

if (isset($_GET['porta']))
{
    $file = 'config.json';
    $json = json_decode(file_get_contents($file),TRUE);

    $json['porta'] = $_GET['porta'];

    file_put_contents($file, json_encode($json));
    
}


if (isset($_GET['reset']))
{

    

    $command = 'sudo python3 /var/www/html/360Linux/360/arduino/reset.py';
    exec($command, $out, $status);

    foreach ($out as $value){
        echo $value;
    }

}

if (isset($_GET['gravaStart']))
{

    $command = 'sudo python3 /var/www/html/360Linux/360/arduino/startRec.py';
    exec($command, $out, $status);

    foreach ($out as $value){
        echo $value;
    }

}


if (isset($_GET['gravaStop']))
{

    $command = 'sudo python3 /var/www/html/360Linux/360/arduino/stopRec.py';
    exec($command, $out, $status);

    foreach ($out as $value){
        echo $value;
    }

}


if (isset($_GET['teste']))
{

        echo 'executando o teste:<br>';
    $command = 'sudo python3 /var/www/html/360Linux/360/teste.py';
    exec($command, $out, $status);

    foreach ($out as $value){
        echo $value;
    }

}

$command = 'ls /dev/ttyA*';
exec($command, $out, $status);

foreach ($out as $value){
    $portas[] = $value;
}

unset($out);

$command = 'ls /dev/ttyU*';
exec($command, $out, $status);

foreach ($out as $value){
    $portas[] = $value;
}



$file = 'data.json';
$json = json_decode(file_get_contents($file));
if (isset($json->porta)){
    $porta = $json->porta;
}else{
    $porta = 'null';
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
    <title>Controle</title>
</head>
<body>
    <?php $evento = 'Controle Remoto'; include('top.php'); if(isset($success)){echo $success;}?>
        <div class="flex coluna">
            <a href="?reset=1" class="btn m-3">Resetar Controle</a>
            <label for="ip" class="text-white m-1 fs-15">Para gravar seu controle pressione o botão correspondente do controle de sua plataforma, clique no botão abaixo, e aguarde 5 segundos para soltar o botão de sua plataforma</label>
            <a href="?gravaStart=1"  class="btn">Gravar botão Start</a>
            <a href="?gravaStop=1"  class="btn">Gravar botão Stop</a>
        </div>
</body>
</html>
