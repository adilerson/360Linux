<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="360Linux/360/css/style.css" rel="stylesheet">
    <title>Atualização360</title>
</head>
<body >
    <?php
        echo '<h2>Iniciando Atualização</h2>';
        $command = 'sudo bash /home/adilerson/atualizar.sh';
        exec($command, $out, $status);

        foreach ($out as $value){

            if (str_contains($value, '***')) {
                $value = preg_replace('/[*]/ui', '', $value);
                echo '<div style="display: flex;"><div>'.trim($value).'</div> - <div style="color:green; font-size:2.2rem; font-weight:bold;">✓</div></div>';
            }

        }
        echo '';


    ?>
</body>
</html>



