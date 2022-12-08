<?php

$zip = new ZipArchive();

$arquivoZip=$_GET['evento'].".zip";

$rootPath = realpath("../videoSpinAPI/eventos/".$_GET['evento']);
// Initialize archive object
$zip = new ZipArchive();
$zip->open('arquivos360.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);

// Create recursive directory iterator
/** @var SplFileInfo[] $files */
$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($rootPath),
    RecursiveIteratorIterator::LEAVES_ONLY
);

foreach ($files as $name => $file)
{
    // Skip directories (they would be added automatically)
    if (!$file->isDir())
    {
        // Get real and relative path for current file
        $filePath = $file->getRealPath();
        $relativePath = substr($filePath, strlen($rootPath) + 1);

        // Add current file to archive
        $zip->addFile($filePath, $relativePath);
    }
}

$zip->close();
echo '<script>$(".arquivoDownload").slideDown();</script>';
/*
$zip = new ZipArchive();

$arquivoZip=$_GET['evento'].".zip";
echo $arquivoZip.'<br>';

$rootPath = realpath("../videoSpinAPI/eventos/".$_GET['evento']);

// Initialize archive object
$zip = new ZipArchive();
$zip->open($arquivoZip, ZipArchive::CREATE | ZipArchive::OVERWRITE);


$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($rootPath),
    RecursiveIteratorIterator::LEAVES_ONLY
);

foreach ($files as $name => $file)
{
    // Skip directories (they would be added automatically)
    if (!$file->isDir())
    {
        // Get real and relative path for current file
        $filePath = $file->getRealPath();
        echo $filePath.'<br>';
        $relativePath = "substr($filePath, strlen($rootPath) + 1)";
        echo $relativePath.'<br>';
        // Add current file to archive
        $zip->addFile($filePath, $relativePath);
    }
}


$zip->close();
echo '<div class="arquivoDownload"><a href="'.$arquivoZip.'">Baixar Arquivo</a></div>';
?>

*/