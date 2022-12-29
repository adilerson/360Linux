<?php

if (isset($_GET['evento'])){
$evento = $_GET['evento'];
}
else{$evento = 'evento';}

$pastaGoPro = 'http://10.5.5.9:8080';

$homepage = explode("href=", file_get_contents($pastaGoPro.'/videos/DCIM'));

$conta = 0;
$str = '{';
foreach($homepage as $href){
    //echo $href.'<br>';continue;
    if ($conta == 0){
        $conta++;
        continue;
    }
    $conteudo = explode('"', $href);

    
    if (count($conteudo) > 0)
    {
        $pasta = explode("/", $conteudo[1]);
        //print_r($pasta);
        if (isset($pasta[4])){

            if ( ($pasta[1] == 'videos') && ($pasta[2] == 'DCIM') ){
                $str .= '"'.$conteudo[1].'",';
                $pastas[] = $conteudo[1];
                
            }
        }

    }

}


$outro = file_get_contents($pastaGoPro.$pastas[0]);

$novo = explode('href=',htmlentities($outro));

if (!is_dir('gopro/videos/download/')){
    mkdir("gopro/videos/download/", 0777);    
}

if (!is_dir('gopro/videos/download/'.$evento)){
    mkdir("gopro/videos/download/".$evento, 0777);    
}

$json = file_get_contents("../videoSpinAPI/config/evento/evento.json");
$data = json_decode($json, true);
//print_r($json);
//exit;
foreach($data as $value){
    
    if ($value['nome'] == $evento){
        $txt = '{"name":"'.$value['nome'].'","audio":"'.$value['audio'].'","frame":"'.$value['frame'].'","vNormal":'.$value['vNormal'].',"vFast":'.$value['vFast'].',"vSlow":'.$value['vSlow'].'}';
    }

    foreach($value as $key=>$valor){
        if ( ($key == 'nome') && ($valor == $evento) ){
            
            //$txt = {"name":"$","audio":"Video_Promo","frame":"Video_Promo","vNormal":5,"vFast":4,"vSlow":3}
            //echo 'encontrou: '.$valor.'<br>';

        }

    }
    
}



$files = [];
$nofiles = [];
foreach($novo as $new){

    //echo $new.'---<br><br>';
    $file = explode('"',html_entity_decode($new));
    //var_dump($file);
    //echo $file[1].'<br>';
    $arquivo = pathinfo($file[1]);
    $arquivoP = explode('/',$file[1]);
    if (!isset($arquivoP[4])){
        continue;
    }else{
        //echo $arquivoP[4].'<br>';
        $arquivoG = pathinfo($arquivoP[4]);
        //print_r($arquivoG); continue;
        if (strtolower($arquivoG['extension']) == 'mp4'){

            //echo $pastaGoPro.$pastas[0].$arquivoG['basename'].'<br>';
            //continue;
    
            $file = $pastaGoPro.$pastas[0].$arquivoG['filename'].'.'.strtolower($arquivoG['extension']);
            $newfile = $pastaDestino.$arquivoG['filename'].'.'.strtolower($arquivoG['extension']);
            //{"name":"Video_Promo","audio":"Video_Promo","frame":"Video_Promo","vNormal":5,"vFast":4,"vSlow":3}
            
            $url = $file;
              
            
            $file_name = basename($url);
            $file_info = pathinfo(basename($url));
            $remote_file_url = $file;
            
            /* New file name and path for this file */
            $local_file = $newfile;
            if (file_exists('../videoSpinAPI/tmp1/'.$local_file)){
                continue;
            }
             
            $copy = copy( $remote_file_url, '../videoSpinAPI/tmp/'.$local_file );
            
            
            if( !$copy ) {
                $nofiles[] = $file;
            }
            else{
                $myfile = fopen('../videoSpinAPI/tmp/'.$file_info['filename'].".txt", "w");               
                fwrite($myfile, $txt);
                fclose($myfile);

                $files[] = $file;
            }
            

        }

    }
}
print_r($files);

?>