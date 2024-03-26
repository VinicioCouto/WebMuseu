document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos HTML com as classes "iconMoon" e "iconSunny"
    const iconMoon = document.querySelector('.iconMoon');
    const iconSunny = document.querySelector('.iconSunny');
    const textos = document.querySelectorAll('.texto');

    
    iconMoon.addEventListener('click', function() {
        
        document.body.style.backgroundColor = 'black';
        iconMoon.style.display = 'none';
        iconSunny.style.display = 'block';
        
        textos.forEach(function(texto) {
            texto.style.color = 'white';
        });
    });

    // Adiciona um event listener para quando o ícone do sol for clicado
    iconSunny.addEventListener('click', function() {
        // Define a cor de fundo do corpo da página como branco (volta ao normal)
        document.body.style.backgroundColor = 'white';
        // Esconde o ícone do sol
        iconSunny.style.display = 'none';
        // Mostra o ícone da lua
        iconMoon.style.display = 'block';

        // Itera sobre todos os elementos com a classe "texto" e muda a cor do texto
        textos.forEach(function(texto) {
            texto.style.color = 'black';
        });
    });
});
