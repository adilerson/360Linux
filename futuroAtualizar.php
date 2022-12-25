<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="360Linux/360/css/style.css" rel="stylesheet">
    <title>Atualização360</title>
</head>
<body style="color: white;">
    <?php
        echo '<h2 style="    width: 100%;text-align: center;">Atualização</h2>';
        $command = 'sudo bash /home/adilerson/atualizar.sh';
        exec($command, $out, $status);

        foreach ($out as $value){

            if (str_contains($value, '***')) {
                $value = preg_replace('/[*]/ui', '', $value);
                echo '<div style="display: flex;margin: 0.5rem 0.3rem;font-size:1.8rem;"><div>'.trim($value).'</div> <div style="margin: 0rem 0.4rem;">-</div> <div style="color:#3eb93e; font-weight:bold;">✓</div></div>';
            }

        }
        echo '';


    ?>
</body>
</html>



