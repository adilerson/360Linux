<?php

if (isset($_POST['comando'])){
    $command = $_POST['comando'];
    exec('sudo '.$command, $out, $status);
}

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="360Linux/360/css/style.css" rel="stylesheet">
    <script type="text/javascript" src="/360Linux/360/js/jquery-2.2.4.min.js"></script>

    <title>Programar</title>
</head>
<body>
    <form action="programar.php" method="post"  class="flex coluna hCenter vCenter" style="height: 15rem; justify-content: space-around !important;">
    <label for="comando">Linha de Comando</label><input type="text" name="comando" value="">
    <input type="submit" class="btn" value="Executar">
    </form>

    <div id="resultado" class="flex hCenter p-1 coluna">
        <?php
            if (isset($out)){
                if ($status == '0'){
                        echo '<div class="w-100 text-center" style="background-color: green; color:white;">OK</div>';
                        foreach($out as $key=>$value){
                            echo $value.'<br>';
                        }
                }
                else{
                    echo '<div class="flex hCenter w-100 vCenter" style="color:white; background-color:#cc1517;">Erro</div>';
                }
            }
        ?>
    </div>
</body>
</html>
<style>
    #resultado{
        background-color: black;
        color: green;
        min-height: 3rem;
        margin: 1rem;
        padding: 1rem;
    }
label{ color:white;}
</style>