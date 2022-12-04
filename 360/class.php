<?php 
date_default_timezone_set('America/Sao_Paulo');

function corrigeNome($string){
    $string = str_replace("_", " ", $string); 

    return $string;
}

function clean($string) {
    $string = str_replace(' ', '_', $string); // Replaces all spaces with hyphens.
 
    $string = preg_replace(array("/(á|à|ã|â|ä)/","/(Á|À|Ã|Â|Ä)/","/(é|è|ê|ë)/","/(É|È|Ê|Ë)/","/(í|ì|î|ï)/","/(Í|Ì|Î|Ï)/","/(ó|ò|õ|ô|ö)/","/(Ó|Ò|Õ|Ô|Ö)/","/(ú|ù|û|ü)/","/(Ú|Ù|Û|Ü)/","/(ñ)/","/(Ñ)/"),explode(" ","a A e E i I o O u U n N"),$string);

    return preg_replace('/[^A-Za-z0-9\_]/', '', $string); // Removes special chars.
 }
 

 function descorrigeNome($string){
    $string = str_replace(" ", "_", $string); 

    return $string;
}

$pathEventos = "/360Linux/videoSpinAPI/dist/media/";
$pathLixeira = "/360Linux/360/videos/lixeira/";
$pathBackup = "/360Linux/360/videos/backup/";


 ?>



