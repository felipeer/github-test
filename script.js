let contador = 1;
setInterval(function() {
    document.getElementById('radio' + contador).checked = true; //função da origem para trocar as imagens
    contador++

    if (contador > 7) { //quantidade de fotos
        contador = 1; //retorno para a primeira foto
    }
}, 3000)