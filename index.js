// Código para os diálogos

var secaoFala = document.getElementById('caixaDeFala');

function dialogoUm() {

    secaoFala.removeChild(secaoFala.firstChild);

    var elementoTextoP = document.createElement('p');
    elementoTextoP.id = 'falaEngie';
    var iFala = 0;
    var txt = 'Bom dia, colega. Imagino que você seja o cara que a Sra. Pauling enviou, não é? Você vai poder testar minha mais nova invenção, um bingo!'; 
    var velocidade = 20; 

    secaoFala.appendChild(elementoTextoP);

    function typeWriter() {
        if (iFala < txt.length) {
        elementoTextoP.innerHTML += txt.charAt(iFala);
        iFala++;
        setTimeout(typeWriter, velocidade);
        }
    }
    typeWriter();
    
}

function comoJogar() {
    secaoFala.removeChild(secaoFala.firstChild);

    var elementoTextoP = document.createElement('p');
    elementoTextoP.id = 'falaEngie';
    var iFala = 0;
    var txt = 'Apenas aperte o botão "Criar cartela" para cada jogador que vai participar e então aperte "jogar" para sortear os números!'; 
    var velocidade = 20; 

    secaoFala.appendChild(elementoTextoP);

    function typeWriter() {
        if (iFala < txt.length) {
        elementoTextoP.innerHTML += txt.charAt(iFala);
        iFala++;
        setTimeout(typeWriter, velocidade);
        }
    }

    typeWriter();
    
}

function quemVoce() {

    secaoFala.removeChild(secaoFala.firstChild);

    var elementoTextoP = document.createElement('p');
    elementoTextoP.id = 'falaEngie';
    var iFala = 0;
    var txt = 'Eu sou Dell Conagher, o engenheiro! Estou trabalhando para a Reliable Excavation Demolition - esse bingo é um projeto requisitado por Redmond Mann em pessoa!' 
    var velocidade = 20; 

    secaoFala.appendChild(elementoTextoP);

    function typeWriter() {
        if (iFala < txt.length) {
        elementoTextoP.innerHTML += txt.charAt(iFala);
        iFala++;
        setTimeout(typeWriter, velocidade);
        }
    }

    typeWriter();
    
}

window.onload = function() {
    dialogoUm();
};






// Código do bingo em si 

var jogadores = []
var numeros_sorteados = []

var JogoEmAndamento = 0;

function reiniciarJogo(){
    location.reload();
}

function gerarNumerosAleatorios(quantidade, min, max) {
    
    if (quantidade > max - min) {
        return;
    }

    var numeros = [];

    while (numeros.length < quantidade) {
        var aleatorio = Math.floor(Math.random() * (max - min) + min);

        if (!numeros.includes(aleatorio)) {
            numeros.push(aleatorio);
        }
    }

    return numeros;
}


function gerarVetorCartela() {
    var cartela = [
        gerarNumerosAleatorios(5, 1, 15),
        gerarNumerosAleatorios(5, 16, 30),
        gerarNumerosAleatorios(5, 31, 45),
        gerarNumerosAleatorios(5, 46, 60),
        gerarNumerosAleatorios(5, 61, 75),
    ];

    return cartela;
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



    var cartela = gerarVetorCartela(); 

    jogadores.push({
        nomeJogador: nomeJogador,
        cartela: cartela
    });

    carregarJogadores();
    

}


function carregarJogadores() {
    limparTabelas();
    for (let jogador of jogadores) {
        if (!document.getElementById(jogador.nomeJogador)) {
            desenharCartela(jogador);
        }
    }
}


function desenharCartela(jogador){
    var section = document.getElementById('cartelas');

    var divCartela = document.createElement('div');
    divCartela.id = jogador.nomeJogador;
    divCartela.className = 'divCartela';
    
    var nomeJogadorH1 = document.createElement('h3');
    nomeJogadorH1.id = 'nomeCartela';
    nomeJogadorH1.innerText = jogador.nomeJogador;
    
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
                td.id = jogador.nomeJogador + j + i;
                td.className = 'celulaComX';
            }else{
                var numeroTD = jogador.cartela[j][i];
                td.innerText = numeroTD;
                td.id = jogador.nomeJogador + j + i;
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

function sortearNumero(numeros_sorteados) {
    var numero = Math.floor(Math.random() * 75) + 1;
    if (numeros_sorteados.includes(numero)) {
        return sortearNumero(numeros_sorteados);
    }
    if (numero !== null) {
        numeros_sorteados.push(numero);
    }
    return numero;
}

var intervalId;

function criarElementoSorteio() {
    var div = document.createElement("div");
    div.id = "divSorteio";
    var p = document.createElement("p");
    p.id = "numeros_sorteados";
    
    var section = document.getElementById("sorteados");
    section.appendChild(div);
    div.appendChild(p);

    return p;
}

function atualizarNumeroSorteado(p, numero) {
    p.textContent = numero;
}

function limparNumerosSorteados() {
    var section = document.getElementById("sorteados");
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
}

function limparTabelas() {
    var caixa = document.querySelectorAll("#caixa div");

    Array.from(caixa).forEach(function (elemento) {
        elemento.remove();
    });
}



function verificarGanhador() {
    for (let jogador of jogadores) {
        var ganhou = true;
        for (let i = 0; i < 5; i++) {
            var linha = jogador.cartela[i];
            for (let j = 0; j < 5; j++) {
                if (!numeros_sorteados.includes(linha[j])) {
                    ganhou = false;
                }
            }
        }
        if (ganhou) {
            alert(`"${jogador.nomeJogador}" ganhou o bingo!`)
            clearInterval(intervalId);
        }
    }
}

function jogar() {
    if (jogadores.length < 2) {

        alert('Crie pelo menos duas cartelas para jogar!');
        return
        
    } else {
        
        limparNumerosSorteados();
        numeros_sorteados = [];
    
        if (intervalId) {
            clearInterval(intervalId);
        }
    
        intervalId = setInterval(function () {
            limparNumerosSorteados();
            limparTabelas();
            
            if(jogadores.length < 1) {
                return clearInterval(intervalId);
            }
    
            var numeroIndividual = sortearNumero(numeros_sorteados);
    
            for (let numero of numeros_sorteados) {
                let p = criarElementoSorteio();
                atualizarNumeroSorteado(p, numero);
                for (let jogador of jogadores) {
                    for(var i = 0; i < 5; i++){
                        for(var j = 0; j < 5; j++){
                            if(i == 2 && j == 2){
    
                                console.log('Célula com X. Ignorando..')
    
                            }else{
    
                                if (numero == jogador.cartela[j][i]) {
                                    td = document.getElementById(jogador.nomeJogador + j + i)
                                    td.style.backgroundColor = "green";
                                }
    
                            }
                            
                        }
                    }
                }
            }
            carregarJogadores()
            if (numeros_sorteados.length === 75) {
                return clearInterval(intervalId);
            }
            verificarGanhador();
            console.log(numeros_sorteados);
        }, 500);

    }

}