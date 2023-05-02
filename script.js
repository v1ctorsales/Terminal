function divPadrao(x){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = "victorsales\\portifolio\\terminal\\ > " + x;
  document.getElementById("padrao2").append(div);
}

function comandoInvalido(x){
  var error = " <-- COMANDO NÃO RECONHECIDO PELO SISTEMA!"
  
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = "victorsales\\portifolio\\terminal\\ > " + x + error;
  document.getElementById("padrao2").append(div);
  alert("Comando inválido");
}

function resHelp(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'victorsales\\portifolio\\terminal\\ > Lista de todos os comandos disponíveis :' +
  '<br/>clear' +
  '<br/>color' +
  '<br/>help'

  document.getElementById("padrao2").append(div);
}

function resColor(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao color: :'  +
  '<br/>green' +
  '<br/>red' +
  '<br/>blue' +
  '<br/>white' +
  '<br/>pink' +
  '<br/>orange'
  document.getElementById("padrao2").append(div);
}

function resColorGreen(){
  document.documentElement.style.color="rgb(110, 247, 110)";
  document.getElementsByTagName('input')[0].style.color="rgb(110, 247, 110)";
}

function resColorRed(){
  document.documentElement.style.color="red";
  document.getElementsByTagName('input')[0].style.color="red";
}

function resColorBlue(){
  document.documentElement.style.color="rgb(53, 130, 230)";
  document.getElementsByTagName('input')[0].style.color="rgb(53, 130, 230)";
}

function resColorWhite(){
  document.documentElement.style.color="white";
  document.getElementsByTagName('input')[0].style.color="white";
}

function resColorPink(){
  document.documentElement.style.color="pink";
  document.getElementsByTagName('input')[0].style.color="pink";
}

function resColorOrange(){
  document.documentElement.style.color="orange";
  document.getElementsByTagName('input')[0].style.color="orange";
}

function resClear(){
  let padrao2 = document.getElementById('padrao2')[0];
  padrao2.innerHTML = "";
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let _input = document.getElementsByName('fname')[0];
    x = x.toLowerCase();

    if (x == "help") {
      divPadrao(x);
      resHelp();
      _input.value= "";
      return false;
    }
    else if (x == "color") {
      divPadrao(x);
      resColor();
      _input.value= "";
      return false;
    }
    else if (x == "color green") {
      divPadrao(x);
      resColorGreen();
      _input.value= "";
      return false;
    }
    else if (x == "color red") {
      divPadrao(x);
      resColorRed();
      _input.value= "";
      return false;
    }
    else if (x == "color blue") {
      divPadrao(x);
      resColorBlue();
      _input.value= "";
      return false;
    }
    else if (x == "color white") {
      divPadrao(x);
      resColorWhite();
      _input.value= "";
      return false;
    }
    else if (x == "color pink") {
      divPadrao(x);
      resColorPink();
      _input.value= "";
      return false;
    }
    else if (x == "color orange") {
      divPadrao(x);
      resColorOrange();
      _input.value= "";
      return false;
    }
    else if (x == "clear" || x== "cls") {
      divPadrao(x);
      resClear();
      _input.value= "";
      return false;
    }
    

    else {
      comandoInvalido(x);
      _input.value= "";
    }
  }