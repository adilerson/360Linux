<?php

if ($_GET['reset'])
{

    $command = 'sudo python3 /var/www/html/360Linux/360/arduino/reset.py';
    exec($command, $out, $status);

    foreach ($out as $value){
        echo $value.'<br>';
    }

}

if ($_GET['gravaStart'])
{

    $command = 'sudo python3 /var/www/html/360Linux/360/arduino/startRec.py';
    exec($command, $out, $status);

    foreach ($out as $value){
        echo $value.'<br>';
    }

}


if ($_GET['gravaStart'])
{

    $command = 'sudo python3 /var/www/html/360Linux/360/arduino/stopRec.py';
    exec($command, $out, $status);

    foreach ($out as $value){
        echo $value.'<br>';
    }

}


?>

