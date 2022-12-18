<div class="topo">
    <div class="home" id="home">
        <a href="eventos.php"><img src="img/home.png"></a>
    </div>
    <div class="eventoTitulo"><?php if (isset($evento)){ echo ucfirst(corrigeNome($evento));} ?></div>  
    <div class="text-center transition flex"><img src="img/refresh.png" id="atualizar" class="transition" style="padding:0;background-color: #56baed;display:none;"></div>
</div>