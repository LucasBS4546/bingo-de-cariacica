var jogadores = []

var JogoEmAndamento = 0;

function gerarNumerosAleatorios(quantidade, min, max){

    if(quantidade > (max - min)){ 
        return;
    }

    var numeros = [];

    while(numeros.length < quantidade){
        var aleatorio = Math.floor(Math.random()*(max - min) + min);
        
        if(!numeros.includes(aleatorio)){
            numeros.push(aleatorio);
        }
    }

    return numeros;

}

function criarCartela(){
    var nomeJogador = prompt('Digite o nome do jogador');

    if (nomeJogador == "") {
        alert('Nomes vazios não são aceitos! Digite um nome válido!');
        return
    }

    if (nomeJogador == null) {
        return
    }

    if (nomeJogador.length > 30) {
        alert('O nome do jogador é longo demais!');
        return
    }

    var cartela = [gerarNumerosAleatorios(5,1,15), gerarNumerosAleatorios(5,16,30), gerarNumerosAleatorios(5,31,45),gerarNumerosAleatorios(5,46,60), gerarNumerosAleatorios(5,61,75)]

    jogadores.push({
        nomeJogador: nomeJogador,
        cartela: cartela
    });

    desenharCartela(nomeJogador, cartela);

}

function reiniciarJogo(){
    location.reload();
}

function desenharCartela(nomeJogador, cartela){
    var section = document.getElementById('cartelas');

    var divCartela = document.createElement('div');
    divCartela.id = 'divCartela';
    
    var nomeJogadorH1 = document.createElement('h3');
    nomeJogadorH1.id = 'nomeCartela';
    nomeJogadorH1.innerText = nomeJogador;
    
    var tabela = document.createElement('table');

    var thead = document.createElement('thead');


    var thB = document.createElement('th');
    thB.innerText = 'B';
    var thI = document.createElement('th');
    thI.innerText = 'I';
    var thN = document.createElement('th');
    thN.innerText = 'N';
    var thG = document.createElement('th');
    thG.innerText = 'G';
    var thO = document.createElement('th');
    thO.innerText = 'O';

    thead.appendChild(thB)
    thead.appendChild(thI)
    thead.appendChild(thN)
    thead.appendChild(thG)
    thead.appendChild(thO)

    for(var i = 0; i < 5; i++){
        var tr = document.createElement('tr');
        for(var j = 0; j < 5; j++){
            var td = document.createElement('td');
            if(i == 2 && j == 2){
                td.innerText = "X";
                tr.appendChild(td);
            }else{
                td.innerText = cartela[j][i]
                tr.appendChild(td);
            }
        }
        tabela.appendChild(tr)
    }
    section.appendChild(divCartela);
    divCartela.appendChild(nomeJogadorH1);
    divCartela.appendChild(tabela);
    tabela.appendChild(thead);
}

function jogoIniciado() {

    var avisoJogoIniciado = document.createElement('h3');
    avisoJogoIniciado.id = 'avisoJogoIniciado';

    var section = document.querySelector("#interface2");

    section.appendChild(avisoJogoIniciado);

    avisoJogoIniciado.innerText = 'O jogo já foi realizado! Para realizar outro jogo, clique em "reiniciar jogo"!'

    var botao = document.querySelector("#jogar");
    botao.disabled = true;

}

//  ESTOU AQUI
//      V
function sortearNumero(quantidade, min, max) {

    if(quantidade > (max - min)){ 
        return;
    }

    var numeroSorteado = [];

    while(numeroSorteado.length < quantidade){
        var aleatorio = Math.floor(Math.random()*(max - min) + min);
        
        if(!numeroSorteado.includes(aleatorio)){
            numeroSorteado.push(aleatorio);
        }
    }

    numeroJogadores = jogadores.length
    
    for(i=0; i<=numeroJogadores; i++){
        for(j=0; j<5; j++){
            numerosCartela = jogadores[i].cartela[j]
            
            for(i=0; i<=numeroJogadores; i++){

                for(j=0; j<5; j++){
        
                    numerosCartela = jogadores[i].cartela[j];
        
                    for(k=0; k<5; k++) {
        
                        if(!numeroSorteado.includes(numerosCartela[k]))
                        console.log(numerosCartela[k]);
        
                    }
                }
        
            }
        }

    }
    





}

function jogar() {

    if (jogadores.length < 2) {
        alert('Deve-se ter pelo menos 2 jogadores para jogar!')
        return
    }

    sortearNumero(74,1,75)


    document.querySelector("#jogar").onclick = function() {jogoIniciado()};
}