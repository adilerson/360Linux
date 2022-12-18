<?php
if (isset($erro)){
    foreach($erro as $val)
    {
        echo '<div class="p-2 w-100 bg-danger text-white fs-15 text-center">'.$val.'</div>';
    }
}
if (isset($sucesso)){
    foreach($sucesso as $val)
    {
        echo '<div class="p-2 w-100 bg-success text-white fs-15 text-center">'.$val.'</div>';
    }
}
?>