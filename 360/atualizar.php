<?php



$command = 'bash /home/adilerson/atualizar.sh';

exec($command, $out, $status);





foreach ($out as $value){
    echo $value.'<br>';
}


?>