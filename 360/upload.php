<?php 

if (isset($_POST['imagem'])){

    $dir = "moldura/"; 
}

if (isset($_POST['audio'])){

    $dir = "mp3/"; 
}


// recebendo o arquivo multipart 
$file = $_FILES["arquivo"]; 
// Move o arquivo da pasta temporaria de upload para a pasta de destino 
if (move_uploaded_file($file["tmp_name"], "$dir/".$file["name"])) { 
    echo "Arquivo enviado com sucesso!"; 
} 
else { 
    echo "Erro, o arquivo não pode ser enviado."; 
}           
?>