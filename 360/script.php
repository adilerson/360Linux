<?php
    include('class.php');
    
    if (isset($_GET['atualiza'])){
        
        $videos = listVideos($_GET['atualiza']);
        
        echo '<script>atualiza("'.count($videos).'")</script>';
    }

    if (isset($_GET['contaVideos'])){
        
        $path = "../videoSpinAPI/eventos/".$_GET['evento']."/";
        //echo '<script>console.log("'.$path.'")</script>';
        
        $diretorio = dir($path);
        $conta = 0;
        while($arquivo = $diretorio -> read()){

            $arq = $arquivo;
            $ext = pathinfo($arq, PATHINFO_EXTENSION);
            
            if ($ext == 'jpg'){
                
                if (filesize($path.$arquivo) > 100){
                    $conta++;
                }
            }
        }
        echo '<script>contar('.$conta.')</script>';
    }


    if (isset($_GET['lastVideo'])){
        $video = getLastVideo();
        if ( count($video) > 0){

            echo '{"video":""'.$video[0]['address'].'","ïd":"'.$video[0]['id'].'"}';
        }

        
    }

    if (isset($_GET['insertVideo'])){
        insertVideo($_GET['insertVideo'],$_GET['event']);
        

        
    }

    if (isset($_GET['dropVideo'])){
        dropVideo($_GET['dropVideo']);
        

        
    }

    if (isset($_GET['identifica'])){
    
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
        }else{
            $command = 'sudo cat /etc/machine-id';
            exec($command, $out, $status);
            foreach($out as $value){
                $id = $value;
            }
            $id;
        }
        
    }


?>
