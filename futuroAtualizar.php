<html lang="pt-BR" style="margin: 2rem;">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/360Linux/360/img/favicon.png">
    <link rel="stylesheet" href="/360Linux/360/css/jquery-confirm.css">
    <link href="/360Linux/360/css/style.css?teste=1" rel="stylesheet">
    <script type="text/javascript" src="/360Linux/360/js/jquery-2.2.4.min.js"></script>
    <script src="/360Linux/360/js/jquery-confirm.js"></script>
    <title>Atualização360</title>
</head>
<body style="color: white;">

<div class="topo">
    <div class="home" id="home">
        <a href="/"><img src="360Linux/360/img/home.png"></a>
    </div>
    <div class="eventoTitulo">

    </div>
        <div class="text-center transition flex">
                <img src="img/refresh.png" id="atualizar" class="transition" style="padding:0;background-color: #56baed;display:none;">
        </div><div class="text-center transition flex">
        <img src="img/refresh.png" id="atualizar" class="transition" style="padding:0;background-color: #56baed;display:none;">
        </div>
</div>

<div class="flex hCenter vCenter mt-3" id="btnAtualizar">
    <div class="btn atualizar">Atualizar</div>
</div>
<div class="flex hCenter vCenter mt-3" id="inicio">
    <a href="https://192.168.36.36" rel="noopener noreferrer" class="btn">Inicio</a>
</div>

<div class="aviso fs-15 text-center">
    Este processo pode levar vários minutos, não desligue o computador ou o wifi no meio deste processo!<div class="progresso mt-1 text-center">
    <div class="progressoAtual" style="width:1px;"></div>
</div>

<div id="status" style="opacity: 0"></div>
</body>
<?php include('/360Linux/360/top.php'); ?>
<input type="hidden" id="atualizados" style="width:100%;" value="0">
<div id="resultado" class="resultado">
    
</div>
<script>
    function atualiza(){
        $("#status").load("script.php?progresso=1");

    }
    anterior = "";
    function aplica(total,texto){
        
        var textoTotal = $("#atualizados").val();
        if (textoTotal.length > 0){
            var textoSplit = textoTotal.split(";")
            if (textoSplit.indexOf(texto) == -1){
                textoTotal = textoTotal + ';' + texto;
            }
        }else{
            textoTotal = texto;
        }
        $("#atualizados").val(textoTotal);

        textoSplitado = textoTotal.split(";");
        if (anterior != textoTotal){
            var div = "";
            for (var i = 0; i < textoSplitado.length; i++) {
                if ( (textoSplitado[i] != '0') && (textoSplitado[i].length > 3) ){
                    if (i == textoSplitado){
                        
                        div += `<div class="filhos"><div class="mark animate-out">✓</div><div class="item">` + textoSplitado[i] + `</div></div>`;                  

                    }else{

                        div += `<div class="filhos"><div class="mark">✓</div><div class="item">` + textoSplitado[i] + `</div></div>`;                  
                    }
                    
                }
            }
            
            $("#resultado").html(div);

            $(".progressoAtual").css("width",total + "%");
            $(".progressoAtual").html(total + "%");
            anterior = textoTotal;
            if (total > 94){
                $("#inicio").attr("style","opacity: 1; display:flex !important");
            }
        }

    }
    
    
    $("#status").load("script.php?zera=1");


    $(".atualizar").click(function(){
        $( "#target" ).submit();
            $.confirm({
                title: 'Atualização',
                content: 'Tem certeza que deseja atualizar o sistema?<br> Isto pode levar mais de 10 minutos, e o computador não pode ser desligado ',
                buttons: {
                    /*
                    Sim: function () {
                        $.alert('Excluído!');
                    },*/
                    
                    Cancelar: function () {
                        //$.alert('Canceled!');
                    },
                    somethingElse: {
                        text: 'Atualizar',
                        btnClass: 'btn-blue',
                        keys: ['enter', 'shift'],
                        action: function(){
                            $("#btnAtualizar").attr("style","opacity: 0; display:none !important");
                            $("#status").load("script.php?atualizar=1");
                            setInterval(atualiza, 1000);
                        }
                    }
                }
            });
            event.preventDefault();
    });
    
</script>

</html>
<style>
    .resultado{
        color:white;
    }
    .mark{
        color:green;
        margin-right:0.3rem;
    }
    .filhos{
        margin-top:0.5rem;
        display:flex;
    }
    #resultado{
        margin-top:1rem;
    }
</style>
<script>
    $("#btnAtualizar").css("opacity","1");
    $("#inicio").attr("style","opacity: 0; display:none !important");
    </script>
