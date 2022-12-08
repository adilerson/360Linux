<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/style.css?teste=4" rel="stylesheet">
    <title>Envio de Arquivos</title>
</head>

<style>
    .quadro{
        padding: 1rem;
    }
    .settings{
        display:flex;
        color:white;
        text-align:center;
        align-items: center;
        background-color:#272727;
        justify-content: flex-start;
    }
    body{
        background: #373e46 !important;
        color: white;
    }
    .bubbly-button {
        margin: 1rem;
        font-family: "Helvetica", "Arial", sans-serif;
        display: inline-block;
        font-size: 1em;
        padding: 1em 2em;
        margin-top: 100px;
        margin-bottom: 60px;
        -webkit-appearance: none;
        appearance: none;
        /* background-color: #00cffc; */
        border: 3px solid #00cffc;
        color: #fff;
        border-radius: 4rem;
        /* border: none; */
        cursor: pointer;
        position: relative;
        transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
        box-shadow: 0 2px 25px rgb(0 207 252 / 39%);
        font-family: 'poppins';
        font-weight: bold;
        font-size: 1.5rem;
    }
    .title{
        color:white;
        font-size: 1.7rem;
    }
    form{
        color:white;
    }
    
</style>

<body>

    <div class="settings">
        <a href="eventos.php">
            <img src="img/back.png">
        </a>
    </div>
    
    <div class="quadro">
        <div class="title">Audio</div>
        <form action="upload.php" method="post" enctype="multipart/form-data">
        Enviar Música de Fundo: <input type="file" name="audio" />
        <input type="submit" value="Enviar"/>
        <link href="css/style.css?teste=4" rel="stylesheet">
        </form>
        <?php
            $itens = new DirectoryIterator('../videoSpinAPI/config/audio/');
            foreach($itens as $item){

                $ext = pathinfo($item, PATHINFO_EXTENSION);

                if ( ($ext != 'png') || ($item->gettype() == 'dir') || ($item == '.') || ($item == '..') ) {
                    continue;
                }
                

                    echo '
                    <div class="pai">
                        <div class="link">
                            <a href="index.php?evento='.$item.'" class="bubbly-button">'.corrigeNome($item).'</a>
                        </div>
                        
                    </div>';
                
                
            }
        ?>
    </div>

    <div class="quadro">
        <div class="title">Molduras</div>
        <form action="upload.php" method="post" enctype="multipart/form-data">
        Enviar uma Moldura: <input type="file" name="imagem" />
        <input type="submit" value="Enviar"/>
        </form>
        <?php
            $itens = new DirectoryIterator('../videoSpinAPI/config/frame/');
            foreach($itens as $item){

                $ext = pathinfo($item, PATHINFO_EXTENSION);

                if ( ($ext != 'png') || ($item->gettype() == 'dir') || ($item == '.') || ($item == '..') ) {
                    continue;
                }
                

                    echo '
                    <div class="pai">
                        <div class="link">
                            <a href="index.php?evento='.$item.'" class="bubbly-button">'.corrigeNome($item).'</a>
                        </div>
                        
                    </div>';
                
                
            }
        ?>
    </div>
</body>


</html>
