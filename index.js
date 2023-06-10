
function dialogoUm() {

    var iFala = 0;
    var txt = 'Bom dia, colega. Imagino que você seja o cara que a Sra. Pauling enviou, não é? Você vai poder testar minha mais nova invenção, um bingo!'; 
    var velocidade = 20; 

    function typeWriter() {
        if (iFala < txt.length) {
        document.getElementById("falaEngie").innerHTML += txt.charAt(iFala);
        iFala++;
        setTimeout(typeWriter, velocidade);
        }
    }
    typeWriter();
    
}

function comoJogar() {
    var iFala = 0;
    var txt = 'Apenas aperte o botão "Criar cartela" para cada jogador que vai participar e então aperte "jogar" para sortear os números!'; 
    var velocidade = 20; 
    document.getElementById("falaEngie").innerText = "";

    function typeWriter() {
        if (iFala < txt.length) {
        document.getElementById("falaEngie").innerHTML += txt.charAt(iFala);
        iFala++;
        setTimeout(typeWriter, velocidade);
        }
    }

    typeWriter();
    
}

function quemVoce() {
    var iFala = 0;
    var txt = 'Eu sou Dell Conagher, o engenheiro! Estou trabalhando para a Reliable Excavation Demolition para tentar superar a Builders League United.' 
    var velocidade = 20; 
    document.getElementById("falaEngie").innerText = "";

    function typeWriter() {
        if (iFala < txt.length) {
        document.getElementById("falaEngie").innerHTML += txt.charAt(iFala);
        iFala++;
        setTimeout(typeWriter, velocidade);
        }
    }

    typeWriter();
    
}


window.onload = function() {
    dialogoUm();
};



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

    if (nomeJogador.length > 26) {
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

function jogar() {

    if (jogadores.length < 2) {
        alert('Deve-se ter pelo menos 2 jogadores para jogar!')
        return
    }

    var numeros_sorteados = [];

    var intervalo = setInterval(function() {
        while(true){
            aleatorio =  Math.floor(Math.random()*75 + 1);
            if(!numeros_sorteados.includes(aleatorio)) {
                numeros_sorteados.push(aleatorio);
                var section_sorteados = document.getElementById('sorteados');
                var divSorteado = document.createElement('div');
                divSorteado.id = 'divSorteio';
                divSorteado.innerText = aleatorio;
                section_sorteados.appendChild(divSorteado);
                break;
            }

            if(verificarGanhador(numeros_sorteados)) {
                break;
            }
        }
        console.log(numeros_sorteados)

    },1000);


    document.querySelector("#jogar").onclick = function() {jogoIniciado()};
}

function verificarGanhador() {
    jogadores.forEach(function(jogador){
        var quantidade = 0;
        for(var i=0; i < jogador.cartela.length; i++) {
            for(var j=0; j<numeros_sorteados.length; j++) {
                if (jogador.cartela[i] == numeros_sorteados[j]){
                    quantidade++;
                }
            }
        }
        if(quantidade == 24) {
            return true;
        }
    }) 

}
