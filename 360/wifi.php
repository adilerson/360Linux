<?php

    if (isset($_POST['SSID'])){
        $myfile = fopen("00-installer-config-wifi.yaml", "w");
        
        $txt = "#wifi gravado por 360CG
    network:
        version: 2
        wifis:
          wlp0s20f3:
            access-points:
                '".$_POST['SSID']."':
                    password: '".$_POST['senha']."'
            dhcp4: true
            optional: true";
        fwrite($myfile, $txt);
        fclose($myfile);

        $command = 'sudo rm /etc/netplan/00-installer-config-wifi.yaml';
        exec($command, $out, $status);

        $command = 'sudo mv /var/www/html/360Linux/360/00-installer-config-wifi.yaml /etc/netplan/00-installer-config-wifi.yaml';
        exec($command, $out, $status);
    
        $command = 'sudo netplan apply';
        exec($command, $out, $status);

        $sucesso[] = 'Wifi alterado com sucesso!';

      }


      
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/360Linux/360/img/favicon.png">
    <link href="css/style.css?teste=07" rel="stylesheet">
    <script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
    <title>Wifi360</title>
</head>
<body>
  <?php include('topo.php'); ?>
  <?php include('msg.php'); ?>
  <h3 class="text-white text-center fs-25">Wifi</h3>
    <form action="wifi.php" method="post" class="flex hcenter" style="   justify-content: center;flex-direction: column;align-items: center;">
        <label for="SSID" class="text-white m-1 fs-15">SSID</label><input type="text" class="fs-15 text-center p-05" name="SSID" id="SSID">
        <label for="senha" class="text-white m-1 fs-15">Senha</label><input type="text" class="fs-15 text-center p-05" name="senha" id="senha">
        <input type="submit" value="Atualizar" class="btn mt-3">
    </form>
    <div class="dividir"></div>

</body>

</html>