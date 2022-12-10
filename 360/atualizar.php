<?php



$command = 'ls /dev/tty*';
exec($command, $out, $status);





foreach ($out as $value){
    echo $value.'<br>';
}


?>