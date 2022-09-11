const nome = document.querySelector("#nome")
const nascimento = document.querySelector("#nascimento")
const endereco = document.querySelector("#endereco")
const telefone = document.querySelector("#telefone");
const escolaridade = document.querySelector("#escolaridade");
const qtdpessoas = document.querySelector("#qtdpessoas");
const botao = document.querySelector("#enviar");

const datadavisita = document.querySelector("#datavisita");
const botaopreencher = document.querySelector("#preencher");

var man = document.getElementById("homem");
var woman = document.getElementById("mulher");

var mulher = false;


botao.onclick = () => {
    nomep.innerText = nome.value;
    nascimentop.innerText = nascimento.value.split('-').reverse().join('/');
    enderecop.innerText = endereco.value;
    telefonep.innerText = telefone.value;
    escolaridadep.innerText = escolaridade.value;
    var today = new Date;
    lblDataExtenso.innerText = formatar(today);
}


function formatar(data) {
    var date = data.getDate();
    var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
    var year = data.getFullYear();
  
    console.log(data);

    return date + " de " + month + " de " + year;
}

function formatardatavisita(data) {
    var date = data.getDate();
    date = date+1; //resolvendo bug que diminuia a data em 1 dia;
    var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
    var year = data.getFullYear();
    return date + " de " + month + " de " + year;
}

function cadPessoa(nome, idade, parentesco, ocupacao, renda){
    var tb = document.getElementById("tbPessoas");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellIdade = linha.insertCell(2);
    var cellParentesco = linha.insertCell(3);
    var cellOcupacao = linha.insertCell(4);
    var cellRenda = linha.insertCell(5);

    var idade1 = idade.split('-').reverse().join('/');

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellIdade.innerHTML = idade1;
    cellParentesco.innerHTML = parentesco;
    cellOcupacao.innerHTML = ocupacao;
    cellRenda.innerHTML = renda;

    nomeform = document.querySelector("#txtNome");
    idadeform = document.querySelector("#txtidade");
    parentescoform = document.querySelector("#txtparentesco");
    ocupacaoform = document.querySelector("#txtocupacao");
    rendaform = document.querySelector("#txtrenda");

    nomeform.value="";
    idadeform.value="";
    parentescoform.value="";
    ocupacaoform.value="";
    rendaform.value="";

}


botaopreencher.onclick = () => {
  datinha = datadavisita.value;
  var valor = new Date(datinha);
  datavisit.innerHTML = formatardatavisita(valor);

  // nameab.innerText = "assistido";


  console.log(nome.value);
  var items = document.getElementsByClassName("nameab"),
    i, len;


  for (i = 0, len = items.length; i < len; i++) {
      items[i].innerHTML = nome.value;
  }

  if(man.checked==true) {
    mulher = false;
  }else if(woman.checked==true) {
    mulher=true;
  }

  if(mulher===true){
    var items2 = document.getElementsByClassName("sexo"),
    i2, len2;

    for (i2 = 0, len2 = items2.length; i2 < len2; i2++) {
        items2[i2].innerHTML = "à Sra "
  }
  }

}



