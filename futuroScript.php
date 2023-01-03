<?php

if (isset($_GET['atualizar'])){

    $command = 'sudo echo "{"pc":"0","texto":""}" > /var/www/html/pc.json';
    exec($command, $out, $status);

    $command = 'sudo curl -Is https://www.google.com | head -1';
    exec($command, $out, $status);
    $conectado = false;
    foreach ($out as $value){
        if (str_contains($value, '200')) {
            $conectado = true;
        }

    }
    if ($conectado == false){
        echo '<h1 style="color:#cc1517">Aparelho desconectado da internet! confira conexão wifi</h1>'; exit;
    }

        

        $command = "sudo wget -N https://www.aplicativo360.com.br/up.sh";
        exec($command, $out, $status);

        $command = "sudo bash /var/www/html/up.sh";
        exec($command, $out, $status);


}

if (isset($_GET['progresso'])){
    $file = "pc.json";
        $json =  json_decode(file_get_contents($file),true);

        //echo $json['pc'];
    echo '<script>aplica("'.$json['pc'].'","'.$json['texto'].'")</script>';
}


if (isset($_GET['zera'])){
    $valor['pc'] = "0";
    $valor['texto'] = "";

    $newJsonString = json_encode($valor);
    file_put_contents('pc.json', $newJsonString);

}


if (isset($_GET['atualizaVersao'])){

    $url = 'https://www.aplicativo360.com.br/versao.php';
    $versaoSite = file_get_contents($url);

    $json = file_get_contents("/var/www/html/360Linux/360/data.json");
    $valor = json_decode($json);

    $valor['versao'] = $versaoSite;
    $newJsonString = json_encode($valor);
    file_put_contents('/var/www/html/360Linux/360/data.json', $newJsonString);

}

if (isset($_GET['desligar'])){

    $command = "sudo shutdown -h now";
    exec($command, $out, $status);
}

?>