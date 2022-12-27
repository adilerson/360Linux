<?php

if (isset($_GET['atualizar'])){

    $command = 'curl -Is https://www.google.com | head -1';
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

    $command = 'sudo wget -N https://www.aplicativo360.com.br/up.sh';
    exec($command, $out, $status);

    $command = 'sudo bash /var/www/html/up.sh';
    exec($command, $out, $status);

    $command = 'sudo bash /var/www/html/up.sh';
    exec($command, $out, $status);
    //exit;

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

?>