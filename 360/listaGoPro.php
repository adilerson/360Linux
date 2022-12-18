<?php
/* Fbw-B!8-Rks 
http://10.5.5.9/bacpac/PW?t=Fbw-B!8-Rks&p=%01
*/


//$homepage = explode("href=", file_get_contents('http://10.5.5.9:8080/videos/DCIM/'));

//$pastaGoPro = 'http://192.168.0.23/360Linux/360/gopro';
$pastaGoPro = 'http://10.5.5.9:8080';
$pastaDestino = 'http://192.168.0.23/360Linux/360/gopro/videos/download/';
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
//echo $outro;exit;
$novo = explode('href=',htmlentities($outro));
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
    
            $file = $pastaGoPro.$pastas[0].$arquivoG['filename'].'.'.strtolower($arquivoG['extension']);
            $newfile = $pastaDestino.$arquivoG['filename'].'.'.strtolower($arquivoG['extension']);

            echo $file.'<br>';
            echo $newfile.'<br><br>';
            //exit;
            //$newfile = $_SERVER['DOCUMENT_ROOT'] . $arquivoG['basename'];
            
            $url = $file;
              
            // Use basename() function to return the base name of file
            $file_name = basename($url);
            

            if (file_put_contents('gopro/videos/download/'.$file_name, file_get_contents($url)))
            {
                echo "File downloaded successfully";
            }
            else
            {
                echo "File downloading failed.";
            }

        }
    }
}
    
        



?>