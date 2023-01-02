<?php

    include('class.php');
    
    if (isset($_GET['maximo'])){
        $maximo = $_GET['maximo'];
    }else{
        $maximo = 10;
    }

    $evento = $_REQUEST['evento'];
    
    

    echo '<div class="videos">';

    $pathSingle = $evento."/";
	$path = "../videoSpinAPI/eventos/".descorrigeNome($evento)."/";
    
    if (!is_dir($path)){

        echo '<div class="bg-orange text-white p-2 w-100 text-center fs-15">Aguardando Envio de video</div>';
        exit;
    }
    
    $diretorio = dir($path);    
    


    $script = '';
    
    $arquivos = [];
    while($arquivo = $diretorio -> read()){
        $arq = $arquivo;
        $ext = pathinfo($arq, PATHINFO_EXTENSION);

        if ($ext == 'jpg'){

            $arquivos[date('Y/m/d H:i:s', filemtime($path.'/'.$arquivo))] = $arquivo;

        }
        

    }

    ksort($arquivos, SORT_STRING);

    if (count($arquivos) == 0){
        
        echo '<div class="bg-orange text-white p-2 w-100 text-center fs-15">Aguardando Envio de video</div>';
        exit;
    }

    $key = 0;

    $arquivos = array_reverse($arquivos);
    $delay = 0;
    $keyTotal = count($arquivos);

    foreach($arquivos as $arquivo){
        

        if ($key < $maximo){
        
            $sonome = pathinfo($arquivo, PATHINFO_FILENAME);
            
            echo '
                    <div class="videoPai" style="">
                        <div class="conta numVideo" id="numVideo'.$key.'">'.$keyTotal--.'</div>
                        <div class="video" ide="qrcode_'.$key.'" style="background-image: url(\''.$path.$sonome.'.jpg\');" video="'.$sonome.'.mp4">
                        
                        </div>
                        <div id="qrcode_'.$key.'" numvideo="'.$key.'" class="desfocado qrcode">
                            <img src="img/clique.png" class="clique">
                        </div>
                    </div>';
                    
                    
                $script .= 'gerar("http://192.168.36.36/360Linux/360/download.php?video='.$pathSingle.$sonome.'.mp4","qrcode_'.$key.'");';

            }
            $delay = $delay + 100;
            $key++;
        

    }
    echo '<script>conta = '.$key.';';
    
        echo $script;
    
        echo '
        </script>
        </div>';

?>

<script>
$(".qrcode").click(function(){
        $(".qrcode").removeClass("desfocado");
        $(".qrcode").addClass("desfocado");
        $(".numVideo").fadeIn("0");
        $("#numVideo"+$(this).attr("numvideo")).fadeOut("1300");
        $(this).removeClass("desfocado",1300);
    })
    $(".video").click(function(){
        
        $(".qrcode").removeClass("desfocado");
        $(".qrcode").addClass("desfocado");
        
        $("#"+$(this).attr("ide")).removeClass("desfocado",1300);
    });


    // Get the modal
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn"); 

    
    $(".video").click(function(){
        
        $("#myModal").fadeIn("50");
        
        
        gerar("<?php echo 'http://192.168.36.36/360Linux/360/download.php?video='.$pathSingle ?>"+$(this).attr("video"),"qrcodeModal"); 
        $("#videoModal").attr("src","<?php echo $path ?>"+$(this).attr("video"))
        
    })
    

    var span = document.getElementsByClassName("close")[0];


    


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
</script>