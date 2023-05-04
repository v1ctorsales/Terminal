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
  //alert("Comando inválido");
}

function resHelp(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'victorsales\\portifolio\\terminal\\ > Lista de todos os comandos disponíveis :' +
  '<br/>clear' +
  '<br/>color' +
  '<br/>help' +
  '<br/>lang' +
  '<br/>mp3' +
  '<br/>mp4' +
  '<br/>sobre'

  document.getElementById("padrao2").append(div);
}

function resColor(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao color:'  +
  '<br/>color green' +
  '<br/>color red' +
  '<br/>color blue' +
  '<br/>color white' +
  '<br/>color pink' +
  '<br/>color orange'+
  '<br/><br/><i class="fa-solid fa-circle-info"></i> Estes comandos são utilizados para trocar a cor dos textos no terminal. ' 
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
  document.documentElement.style.color="#fc03ad";
  document.getElementsByTagName('input')[0].style.color="#fc03ad";
}

function resColorOrange(){
  document.documentElement.style.color="orange";
  document.getElementsByTagName('input')[0].style.color="orange";
}

function resClear(){
  let padrao2 = document.getElementById('padrao2')[0];
  padrao2.innerHTML = "";
}

function resLang(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao lang:'  +
  '<br/>lang ptbr' +
  '<br/>lang eng' +
  '<br/><br/><i class="fa-solid fa-circle-info"></i> Estes comandos são utilizados para trocar o idioma dos textos no terminal. ' 
  document.getElementById("padrao2").append(div);
}

function resSobre(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Mais informações sobre este sistema:' +
  '<br/><br/>O Terminal Walkman foi desenvolvido por Victor Sales e tem o intuito de reunir informações sobre o desenvolvedor.' +
  '<br/>O aplicativo foi desenvolvido com HTML, CSS e JavaScript'
  document.getElementById("padrao2").append(div);
}

function resNetInfo(){
  $.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = JSON.stringify(data, null, 2)
  document.getElementById("padrao2").append(div);
});
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let _input = document.getElementsByName('fname')[0];
    x = x.toLowerCase();

    if (x == "help" || x == "ajuda") {
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
    else if (x == "sobre" || x=="about") {
      divPadrao(x);
      resSobre();
      _input.value= "";
      return false;
    }
    else if (x == "mp3") {
      divPadrao(x);
      resMp3();
      _input.value= "";
      return false;
    }

    else if (x == "lang" || x == "idioma" || x == "language" || x == "lingua") {
      divPadrao(x);
      resLang();
      _input.value= "";
      return false;
    }

    else if (x == "netinfo" || x=="ipconfig") {
      divPadrao(x);
      resNetInfo();
      _input.value= "";
      return false;
    }
    

    else {
      comandoInvalido(x);
      _input.value= "";
    }
  }