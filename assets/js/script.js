(function(){
    //PEGAR CANVAS
    var cnv = document.querySelector("canvas");

    //CONTEXTO DE RENDERIZACAO 2D
    var ctx = cnv.getContext('2d');

    //RECURSOS DO JOGO =============================

    //ENTRADAS DAS TECLAS
    const LEFT = 37;
    const RIGHT = 39;
    const ENTER = 13;
    const SPACE = 32;

    //DIRECOES
    var mvLeft = mvRight = false;

    //ESTADOS DO JOGO
    const LOADING = 0;
    const PLAYING = 1;
    const PAUSED = 2;
    const OVER = 3;

    var gameState = LOADING;

    //LISTENERS
    window.addEventListener('keydown',function(e){
        var key = e.keyCode;
        switch(key){
            case LEFT:
                mvLeft = true;
                break;
            case RIGHT:
                mvRight = true;
                break;
        }
    },false);

    window.addEventListener('keyup',function(e){
        var key = e.keyCode;
        switch(key){
            case LEFT:
                mvLeft = false;
                break;
            case RIGHT:
                mvRight = false;
                break;
            case
                ENTER:
                if(gameState!==PLAYING){
                    gameState = PLAYING;
                }else{
                    gameState = PAUSED;
                }
        }
    },false);

    //FUNCOES=======================================
}());