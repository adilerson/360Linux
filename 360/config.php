<?php

if (isset($_POST['atualizar'])){
    $path = 'videoSpin/src/assets/';
    $path = '';
    $_POST['usb'] = str_replace("/dev/tty", "", $_POST['usb']);
    $newJsonString = json_encode($_POST);
    file_put_contents($path.'data.json', $newJsonString); 

    
    $success = '<div style="
        color: white;
        text-align: center;
        width: 90%;
        font-size: 1.3rem;
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        margin: 1rem;
        margin-right: 3rem !important;
        background-color: #4e7c4e;
    ">Atualizado com sucesso</div>';

}

$json = file_get_contents($path."data.json");

$data = json_decode($json);


?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="icon" type="image/png" href="/360Linux/360/img/favicon.png">
    <link href="css/style.css?teste=07" rel="stylesheet">
    <title>Configurações 360</title>
</head>

<body>

    <?php $evento = 'Configurações'; include('top.php'); if(isset($success)){echo $success;}?>

    <div style="display:flex; width:100%; height:80vh;align-items: center;justify-content: center;">

    <?php 

        echo '<div class="form">
        <form method="post" action="?status=5&desktop=1">
        <a href="wifi.php" class="btn">Configurar WIFI</a>
        <a href="controle.php" class="btn">Configurar Controle</a>
        ';
        echo '<input type="hidden" name="atualizar" value="1">';
        foreach ($data as $key => $entry) {
            if ( ($key != 'atualizar') && ($key != 'estilo') && ($key != 'usb')  && ($key != 'porta') && ($key != 'record') ){

                echo  '<div class="input"><label for="'.$key.'">'.ucfirst($key).'</label><input name="'.$key.'" id="'.$key.'" value="'.$entry.'"></div>';
            }
            if ($key == 'estilo'){
                $white = ''; $dark = '';
                if ($entry == '#272727'){
                    $dark == 'selected';
                }else if ($entry == 'white'){
                    $white = 'selected';
                }
                echo '<div class="input"><label for="'.$key.'">'.ucfirst($key).'</label>
                <select name="estilo" id="estilo">
                    <option value="#272727" '.$dark.'>Dark</option>
                    <option value="white" '.$white.'>Branco</option>
                </select></div>';
            }

            if ($key == 'usb'){
                $command = 'ls /dev/ttyA*';
                exec($command, $out, $status);

                foreach($out as $value){
                        $str[] = $value;
                }

                unset($out);

                $command = 'ls /dev/ttyU*';
                exec($command, $out, $status);
                foreach($out as $value){
                        $str[] = $value;
                }

                echo '<div class="input"><label for="'.$key.'">Arduino</label><select name="usb" id="usb" class="select">';
                foreach($str as $value){
                        echo '<option value="'.$value.'" class="option">'.str_replace("/dev/tty", "", ucfirst($value)).'</option>';
                }

                echo '</select></div>';
            }
            
        }

        echo '<button type="submit" class="btn">Salvar</button></form></div></div>';


     
    ?>
    
    

    <?php //echo '<a class="btn" style="background-color:blue; color: white;" href="?status=3&desktop=1">MANTER</a>'; ?>
    
</div>

    <style>
            .input{
                margin:0.7rem;
                width: 15rem;
            }
            label{
                font-size:1.3rem;
                color:white;
                font-weight:bold;
                min-width: 6rem;
            }
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .input{
                display:flex;
            }
    </style>
</body>
</html>