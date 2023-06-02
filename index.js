function gerarVetorInicial() {
    var vetor = [];
    for(var i = 1; i<=75; i++) {
        vetor.push(i);
    }
    return vetor;
}

function gerarNumerosCartela() {
    var vetorInicial = gerarVetorInicial();
    var cartela = [];

    while(cartela.length < 24) {
        var indice = Math.floor(Math.random()*vetorInicial.length);
        cartela.push(vetorInicial[indice]);
        vetorInicial.splice(indice, 1);
    }
    return cartela;
}

function criarCartela() {
    nomeJogador = prompt("Escreva o nome do jogador!");

    if (nomeJogador != null) {
        if (nomeJogador == "" || nomeJogador == null ) {
            alert('Nomes vazios não são aceitos! Digite um nome válido!');
            return;
        } else if (nomeJogador.length > 18) {
            alert('O nome do jogador é longo demais!');
            return;
        } else {
            var divCartela = document.getElementById('divCartela');
            divCartela = document.createElement('div');
            divCartela.id = 'divCartela';
            var nomeCartela = document.getElementById('nomeCartela');
            nomeCartela = document.createElement('h1');
            nomeCartela.id = 'nomeCartela';
            nomeCartela.innerText = nomeJogador
            var tabela = document.getElementById('tabela');
            tabela = document.createElement('table');
            tabela.id = 'tabela';
            var section = document.getElementById('cartelas');
            section.appendChild(divCartela);
            divCartela.appendChild(nomeCartela);
            divCartela.appendChild(tabela);
            var thead = document.createElement('thead');
            tabela.appendChild(thead);
            var th1 = document.createElement('th');
            th1.innerText = "B";
            thead.appendChild(th1);
            var th2 = document.createElement('th');
            th2.innerText = "I";
            thead.appendChild(th2);
            var th3 = document.createElement('th');
            th3.innerText = "N";
            thead.appendChild(th3);
            var th4 = document.createElement('th');
            th4.innerText = "G";
            thead.appendChild(th4);
            var th5 = document.createElement('th');
            th5.innerText = "O";
            thead.appendChild(th5);
            
            var cartelaGerada = gerarNumerosCartela();
            console.log(cartelaGerada);
        
            var linha = tabela.insertRow(-1);
            linha.insertCell(0).innerText = cartelaGerada[0];
            linha.insertCell(1).innerText = cartelaGerada[1];
            linha.insertCell(2).innerText = cartelaGerada[2];
            linha.insertCell(3).innerText = cartelaGerada[3];
            linha.insertCell(4).innerText = cartelaGerada[4];
        
            var linha2 = tabela.insertRow(-1);
            linha2.insertCell(0).innerText = cartelaGerada[5];
            linha2.insertCell(1).innerText = cartelaGerada[6];
            linha2.insertCell(2).innerText = cartelaGerada[7];
            linha2.insertCell(3).innerText = cartelaGerada[8];
            linha2.insertCell(4).innerText = cartelaGerada[9];
        
            var linha3 = tabela.insertRow(-1);
            linha3.insertCell(0).innerText = cartelaGerada[10];
            linha3.insertCell(1).innerText = cartelaGerada[11];
            linha3.insertCell(2).innerText = 'X';
            linha3.insertCell(3).innerText = cartelaGerada[12];
            linha3.insertCell(4).innerText = cartelaGerada[13];
        
            var linha4 = tabela.insertRow(-1);
            linha4.insertCell(0).innerText = cartelaGerada[14];
            linha4.insertCell(1).innerText = cartelaGerada[15];
            linha4.insertCell(2).innerText = cartelaGerada[16];
            linha4.insertCell(3).innerText = cartelaGerada[17];
            linha4.insertCell(4).innerText = cartelaGerada[18];
        
            var linha5 = tabela.insertRow(-1);
            linha5.insertCell(0).innerText = cartelaGerada[19];
            linha5.insertCell(1).innerText = cartelaGerada[20];
            linha5.insertCell(2).innerText = cartelaGerada[21];
            linha5.insertCell(3).innerText = cartelaGerada[22];
            linha5.insertCell(4).innerText = cartelaGerada[23];
        }

    }

}

function reiniciarJogo() {
    location.reload();
}