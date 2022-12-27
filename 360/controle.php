<?php
if (isset($_POST['porta']))
{
    $file = 'config.json';
    $json = json_decode(file_get_contents($file),TRUE);

    $json['porta'] = $_POST['porta'];

    file_put_contents($file, json_encode($json));
    
}


if (isset($_POST['reset']))
{

    $command = 'sudo python3 /var/www/html/360Linux/360/arduino/reset.py';
    exec($command, $out, $status);

    foreach ($out as $value){
        echo $value;
    }

}

if (isset($_POST['gravaStart']))
{

    $command = 'sudo python3 /var/www/html/360Linux/360/arduino/startRec.py';
    exec($command, $out, $status);

    foreach ($out as $value){
        echo $value;
    }

}


if (isset($_POST['gravaStart']))
{

    $command = 'sudo python3 /var/www/html/360Linux/360/arduino/stopRec.py';
    exec($command, $out, $status);

    foreach ($out as $value){
        echo $value;
    }

}


if (isset($_POST['teste']))
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



$file = 'config.json';
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
<link rel="icon" type="image/png" href="/360Linux/360/img/favicon.ico">
    <link href="css/style.css?teste=07" rel="stylesheet">
    <script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
    <title>Controle</title>
</head>
<body>
    <h3 class="text-white text-center fs-25">Controle Remoto</h3>
    <form action="controle.php" method="post" class="flex hcenter" style="   justify-content: center;flex-direction: column;align-items: center;">
        <label for="ip" class="text-white m-1 fs-15">Porta USB</label>
        <select name="portas" id="portas">
            <option value="-1">Selecionar Porta</option>
            <?php
            foreach($portas as $value){
                if ($value == $porta){
                    echo '<option value="'.$value.'">'.str_replace("/dev/tty", "", "$value").'</option>';
                }
            }
            ?>
        </select>
        <input type="submit" value="Atualizar" class="btn mt-3">
    </form>
</body>
</html>