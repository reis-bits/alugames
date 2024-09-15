
// Função alterar status chamada no HTML pelo botão Alugar/Devolver. Muda o Status do Jogo
function alterarStatus(p) {

    // Variável jogo declarada pegando pelo id um jogo, com o número definido pelo parâmetro.
    let jogo = document.getElementById('game-' + p);

    // Variáveis com a Imagem do jogo e o botão de Alugar/Devolver.
    let imagemJogo = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');

    // Condicionais que determinam oque fazer com um jogo dependendo do seu estado
    if(imagemJogo.classList.contains('dashboard__item__img--rented')) {
        // Se o jogo estiver alugado e o botão for clicado, remove a classe que o deixa em estado de alugado.
        imagemJogo.classList.remove('dashboard__item__img--rented');
    } else {
        // Do contrário, adiciona a classe.
        imagemJogo.classList.add('dashboard__item__img--rented');
    }

    // Condicionais que determinam oque fazer com o botão dependendo do seu estado.
    if(botao.classList.contains('dashboard__item__button--return')) {
        // Se estiver alugado, remove a classe que o deixa no estado e muda o texto no HTML para "alugar".
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
    } else {
        // Do contrário, adiciona a classe e muda o texto para "Devolver".
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
    }

    // Informações do Dev.
    console.log(jogo, imagemJogo, botao);
}