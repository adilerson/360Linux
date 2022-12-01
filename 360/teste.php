<?php

$port = "/dev/ttyACM0";

$command = '/var/www/html/360/python3 begin.py';
exec($command, $out, $status);

echo '<br>passo 1 finalizado<br>';

$message = exec("/var/www/html/360/begin.py 2>&1");

echo '<br>passo 2 finalizado</br><br>';

print_r($message);

foreach ($out as $value){
echo $value.'<br>';
}
echo '<br>'.$status.'<br>';

?>
