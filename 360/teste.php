GNU nano 6.2                                            teste.php                                                     <?php

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


if (isset($_GET['gravaStart']))
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


?>