<?php 



if (isset($_GET['status']))
{
    $status = $_GET['status'];
    if (isset($_GET['com']))
    {
        $porta = $_GET['com'];
    }
}

if (isset($_POST['status']))
{
    $status = $_POST['status'];
    if (isset($_POST['com']))
    {
        $porta = $_POST['com'];
    }
}

if (!isset($porta))
{
    $porta = '0';
}

    $port = "/dev/ttyACM".$porta;

    exec('echo "1" > /dev/ttyACM0');
/*
    $fp = fopen($port, 'c+');

    fwrite($fp, $status);

    fclose($fp);
*/

if (!isset($_GET['desktop'])){
    exit;
}

if ($status == 1){
    $status = 0;
    $ligaDesliga = 'Off';
    $color = '#cc1517';
}else{
    $status = 1;
    $ligaDesliga = 'On';
    $color = 'green';
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/style.css?teste=4" rel="stylesheet">
    <title>Led</title>
</head>
<body>
    <div style="display:flex; width:100%; height:80vh;align-items: center;justify-content: center;">

    <?php 
        echo '<div class="master"><div><a class="btn" style="background-color:'.$color.'; color: white;" href="?com='.$porta.'&status='.$status.'&desktop=1">'.$ligaDesliga.'</a></div>';
       
    ?>

    

    <?php //echo '<a class="btn" style="background-color:blue; color: white;" href="?status=3&desktop=1">MANTER</a>'; ?>
</div>

</body>
</html>
