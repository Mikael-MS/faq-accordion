
function accordion(t) {
    // essa variavel pega o elemento pai do botão clicado (passado por parâmetro)  
    const parentEl = document.getElementsByClassName('btn')[t].parentElement;

    // esssa variavel verfica a classe do elemento pai
    const content = parentEl.classList.contains('questionHide');

    // essa variavel é o conjunto de todos elemnetos pais com a class question
    const questions = document.getElementsByClassName('question');


    //essa variavel pega elemnto com a class title (o h4) no index clicado 
    const title = document.getElementsByClassName('title')[t];
    //essa variavel pega o icon-arrow
    const icon = document.getElementsByClassName('icon-arrow');

    //  esse if verifica se o content possui aquela classe
    if (content == true) {

        // esse loop vai aplicar a class que esconde os conteudos quando outro for clicado
        for(let i = 0 ; i < questions.length; i++){
            questions[i].classList = 'question questionHide';
            icon[i].style.transform = 'rotate(180deg)';
        }

        // e mostrar somente o que foi clicado
        parentEl.className = 'question questionShow';
        title.style.fontWeight = 'bold';
        icon[t].style.transform = 'rotate(0deg)';
        icon[t].style.transition = '0.5s linear';
    } else {
        // se não vai esconder o conetudo
        parentEl.className = 'question questionHide';
        title.style.fontWeight = 'normal';
        icon[t].style.transform = 'rotate(180deg)';
        icon[t].style.transition = '0.5s linear';
    }

}


