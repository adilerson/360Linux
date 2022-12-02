<?php
    include('class.php');
    
    if (isset($_GET['maximo'])){
        $maximo = $_GET['maximo'];
    }else{
        $maximo = 100;
    }

    $evento = $_REQUEST['evento'];
    
    echo '';
    echo '<div class="ws-100 text-center transition"><div id="atualizar" class="btn transition" style="display:none;">Atualizar</div></div>';
    echo '<div class="videos">';

    $pathSingle = $evento."/";
	$path = "../videoSpinAPI/dist/media/".$evento."/";
	
    $diretorio = dir($path);
    $script = '';
    

    while($arquivo = $diretorio -> read()){
        $arq = $arquivo;
        $ext = pathinfo($arq, PATHINFO_EXTENSION);

        if ($ext == 'mp4'){
            $arquivos[] = $arquivo;
        }
        

    }
    $key = 0;

    $arquivos = array_reverse($arquivos);
    foreach($arquivos as $arquivo){

        
        if ($key < $maximo){
        
            $sonome = pathinfo($arquivo, PATHINFO_FILENAME);

            echo '<div class="videoPai">
                    <div class="video" ide="qrcode_'.$key.'" style="background-image: url(\''.$path.$sonome.'.jpg\');" video="'.$sonome.'.mp4">';
                /*
                    <video  class="videoEmbed" controls>
                        <source src="'.$path.$arquivo.'" type="video/mp4">
                    </video>
                    */
            //echo '<img src="'.$path.$sonome.'.jpg" class="videoEmbed"></img>';

                echo '</div><div id="qrcode_'.$key.'" class="desfocado qrcode transition-1"></div>
                </div>';
                $script .= 'gerar("http://'.$_SERVER['SERVER_NAME'].'/360/download.php?video='.$pathSingle.$arquivo.'","qrcode_'.$key.'"); ';

            }
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

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    $(".video").click(function(){
        //modal.style.display = "block";
        $("#myModal").fadeIn("50");
        
        
        gerar("http://<?php echo $_SERVER['SERVER_NAME'] ?>/360/download.php?video=<?php echo $path ?>"+$(this).attr("video"),"qrcodeModal"); 
        $("#videoModal").attr("src","<?php echo $path ?>"+$(this).attr("video"))
        
    })
    

    // When the user clicks on <span> (x), close the modal
    $(".close").click(function(){
        //$("#videoModal").attr("src","");
        //$("#myModal").fadeOut("50");

        $(function() {
            $('#myModal').fadeOut({
                
            }, 50, function() {
                $('#videoModal').attr("src","")
            })
        })
        //modal.style.display = "none";
    });
    


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
</script>