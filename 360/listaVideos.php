<?php

    include('class.php');
    
    if (isset($_GET['maximo'])){
        $maximo = $_GET['maximo'];
    }else{
        $maximo = 100;
    }

    $evento = $_REQUEST['evento'];
    
    echo '';

    echo '<div class="videos">';

    $pathSingle = $evento."/";
	$path = "../videoSpinAPI/eventos/".$evento."/";

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
    foreach($arquivos as $arquivo){
        

        if ($key < $maximo){
        
            $sonome = pathinfo($arquivo, PATHINFO_FILENAME);

            echo '
                    <div class="videoPai animate-out" style="opacity:0;animation-delay: '.$delay.'ms;">
            
                        <div class="video" ide="qrcode_'.$key.'" style="background-image: url(\''.$path.$sonome.'.jpg\');" video="'.$sonome.'.mp4">
                        
                        </div>
                        <div id="qrcode_'.$key.'" class="desfocado qrcode transition-1">
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
        
        
        gerar("http://<?php echo $_SERVER['SERVER_NAME'] ?>/360Linux/360/download.php?video=<?php echo $path ?>"+$(this).attr("video"),"qrcodeModal"); 
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