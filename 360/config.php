<?php

if (isset($_POST['atualizar'])){
    $path = 'videoSpin/src/assets/';
    $path = '';
    $newJsonString = json_encode($_POST);
    file_put_contents($path.'data.json', $newJsonString); 

    
    echo '<div style="
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
    <link href="css/style.css?teste=4" rel="stylesheet">
    <title>Configurações 360</title>
</head>

<body>
    <h1 style="width:100%; color:white; text-align:center; margin-top:2rem;">Configurações</h1>
    <div style="display:flex; width:100%; height:80vh;align-items: center;justify-content: center;">

    <?php 

        echo '<div class="form"><form method="post" action="?status=5&desktop=1">';
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

        echo '<button type="submit" style="margin-top:1rem; 
        background-color: #56baed;
        border: none;
        color: white;
        padding: 15px 80px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        /* text-transform: uppercase; */
        font-size: 1.3rem;
        -webkit-box-shadow: 0 10px 30px 0 rgb(95 186 233 / 40%);
        box-shadow: 0 10px 30px 0 rgb(95 186 233 / 40%);
        -webkit-border-radius: 5px 5px 5px 5px;
        border-radius: 5px 5px 5px 5px;
        margin: 15px 20px 14px 20px;
        cursor: pointer;
        ">Salvar</button></form></div></div>';

     
    ?>
    
    

    <?php //echo '<a class="btn" style="background-color:blue; color: white;" href="?status=3&desktop=1">MANTER</a>'; ?>
</div>
    <style>
            .input{
                margin:0.7rem;
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