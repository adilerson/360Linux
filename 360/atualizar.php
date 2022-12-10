<?php



$command = 'bash /home/adilerson/atualizar.sh';
echo 'vai executar';
exec($command, $out, $status);
echo '<br>executou';

foreach ($out as $value){
    echo $value.'<br>';
}
echo '<br>retorno';


?>