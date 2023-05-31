function gerarVetorInicial() {
    var vetor = [];
    for(var i = 1; i<=75; i++) {
        vetor.push(i);
    }
    return vetor;
}

function gerarCartelaHoje() {
    var vetorInicial = gerarVetorInicial();
    var cartela = [];

    while(cartela.length < 24) {
        var indice = Math.floor(Math.random()*vetorInicial.length);
        cartela.push(vetorInicial[indice]);
        vetorInicial.splice(indice, 1);
    }
    console.log(cartela);
    return cartela;
}

function criarCartela() {
    var tabela = document.getElementById('tabela');
    tabela = document.createElement('table');
    tabela.id = 'tabela';
    var section = document.getElementById('interface');
    section.appendChild(tabela);
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
    
    var cartelaGerada = gerarVetorInicial();

    var linha = tabela.insertRow(-1);
    linha.insertCell(0).innerText = 69;
    linha.insertCell(1).innerText = 69;
    linha.insertCell(2).innerText = 69;
    linha.insertCell(3).innerText = 69;
    linha.insertCell(4).innerText = 69;

    var linha2 = tabela.insertRow(-1);
    linha2.insertCell(0).innerText = 69;
    linha2.insertCell(1).innerText = 69;
    linha2.insertCell(2).innerText = 69;
    linha2.insertCell(3).innerText = 69;
    linha2.insertCell(4).innerText = 69;

    var linha3 = tabela.insertRow(-1);
    linha3.insertCell(0).innerText = 69;
    linha3.insertCell(1).innerText = 69;
    linha3.insertCell(2).innerText = 'X';
    linha3.insertCell(3).innerText = 69;
    linha3.insertCell(4).innerText = 69;

    var linha4 = tabela.insertRow(-1);
    linha4.insertCell(0).innerText = 69;
    linha4.insertCell(1).innerText = 69;
    linha4.insertCell(2).innerText = 69;
    linha4.insertCell(3).innerText = 69;
    linha4.insertCell(4).innerText = 69;

    var linha5 = tabela.insertRow(-1);
    linha5.insertCell(0).innerText = 69;
    linha5.insertCell(1).innerText = 69;
    linha5.insertCell(2).innerText = 69;
    linha5.insertCell(3).innerText = 69;
    linha5.insertCell(4).innerText = 69;


}