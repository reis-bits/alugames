function alterarStatus(p) {

    let jogo = document.getElementById('game-' + p);

    let imagemJogo = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');

    if(imagemJogo.classList.contains('dashboard__item__img--rented')) {
        imagemJogo.classList.remove('dashboard__item__img--rented');
    } else {
        imagemJogo.classList.add('dashboard__item__img--rented');
    }

    if(botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
    }

    console.log(jogo, imagemJogo, botao);
}