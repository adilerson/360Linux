<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/360Linux/360/css/style.css?teste=1" rel="stylesheet">
    <script type="text/javascript" src="/360Linux/360/js/jquery-2.2.4.min.js"></script>
    <link rel="stylesheet" href="/360Linux/360/css/jquery-confirm.css">
    <script src="/360Linux/360/js/jquery-confirm.js"></script>
    <title>Atualização360</title>
</head>
<body style="color: white;">

<div class="flex hCenter vCenter mt-3">
    <div class="btn atualizar">Atualizar</div>
</div>
<div class="aviso fs-15 text-center">Este processo pode levar vários minutos, não desligue o computador ou o wifi no meio deste processo!<div class="progresso mt-1 text-center">
    <div class="progressoAtual" style="width:1px;"></div>
</div>
<div id="status" style="opacity: 0"></div>
</body>
<input type="text" id="atualizados" style="width:100%;" value="">

<script>
    function atualiza(){
        $("#status").load("script.php?progresso=1");

    }
    function aplica(total,texto){
        
        var textoTotal = $("#atualizados").val();
        
        if (textoTotal.length > 0){
            var textoSplit = textoTotal.split(";")
            if (textoSplit.indexOf(texto) == -1){
                textoTotal = textoTotal + ';' + texto;
            }
        }
        $("#atualizados").val(textoTotal);
        $(".progressoAtual").css("width",total + "%");
        $(".progressoAtual").html(total + "%");
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
                            setInterval(atualiza, 1000);
                            $("#status").load("script.php?atualizar=1");
                        }
                    }
                }
            });
            event.preventDefault();
    });

</script>

</html>
