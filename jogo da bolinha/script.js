let pontos = 0;
const game = document.getElementById('game');
const pontuacao = document.getElementById('pontuacao');

function moverBola(bola) {
    const x = Math.random() * (game.clientWidth - 50); 
    const y = Math.random() * (game.clientHeight - 50); 
    bola.style.left = `${x}px`;
    bola.style.top = `${y}px`;
}

const createGame = () => {
    const bola = document.createElement('div');
    bola.className = 'bola';

    
    bola.addEventListener('click', () => {
        pontos++;
        pontuacao.textContent = `Pontos: ${pontos}`;
        moverBola(bola);
    });

    game.appendChild(bola); 
    moverBola(bola); 
}

createGame();

document.getElementById("fechar").onclick = function() {
    window.close();
}
