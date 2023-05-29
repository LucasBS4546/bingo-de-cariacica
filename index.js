function criarCartela() {
    var tabela = document.getElementById('tabela');
    tabela = document.createElement('table');
    tabela.id = 'tabela';
    var section = document.getElementById('pao');
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
    
    var linha = tabela.insertRow(-1);
    linha.insertCell(0).innerText = numero1;
    linha.insertCell(1).innerText = 2;
    linha.insertCell(2).innerText = 3;
    linha.insertCell(3).innerText = 4;
    linha.insertCell(4).innerText = 5;

    var linha2 = tabela.insertRow(-1);
    linha2.insertCell(0).innerText = 1;
    linha2.insertCell(1).innerText = 2;
    linha2.insertCell(2).innerText = 3;
    linha2.insertCell(3).innerText = 4;
    linha2.insertCell(4).innerText = 5;

    var linha3 = tabela.insertRow(-1);
    linha3.insertCell(0).innerText = 1;
    linha3.insertCell(1).innerText = 2;
    linha3.insertCell(2).innerText = 'X';
    linha3.insertCell(3).innerText = 4;
    linha3.insertCell(4).innerText = 5;

    var linha4 = tabela.insertRow(-1);
    linha4.insertCell(0).innerText = 1;
    linha4.insertCell(1).innerText = 2;
    linha4.insertCell(2).innerText = 3;
    linha4.insertCell(3).innerText = 4;
    linha4.insertCell(4).innerText = 5;

    var linha5 = tabela.insertRow(-1);
    linha5.insertCell(0).innerText = 1;
    linha5.insertCell(1).innerText = 2;
    linha5.insertCell(2).innerText = 3;
    linha5.insertCell(3).innerText = 4;
    linha5.insertCell(4).innerText = 5;


}