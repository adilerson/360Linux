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

    $command = 'sudo bash /home/adilerson/atualizar.sh';
    exec($command, $out, $status);
    exit;

}

if (isset($_GET['progresso'])){
    $file = "pc.json";
        $json =  json_decode(file_get_contents($file),true);

        
    echo '<script>aplica("'.$json->pc.'")</script>';
}

?>