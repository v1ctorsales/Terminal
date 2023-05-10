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
  '<br/>ipconfig' +
  '<br/>iploc'+
  //'<br/>lang' +
  '<br/>mp3' +
  '<br/>mp4' +
  '<br/>sobre'+
  '<br/>short'

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
  var theColorIs = $('.welcome').css("color");
  padrao2.style.css=(theColorIs);
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
  '<br/><br/>O Terminal Walkman foi desenvolvido por Victor Sales e tem o intuito de reunir ferramentas úteis para o desenvolvedor.' +
  '<br/>Quem sabe você não encontra algo útil pra você também?'+
  '<br/>O aplicativo foi desenvolvido com HTML, CSS e JavaScript'
  document.getElementById("padrao2").append(div);
}

function resIpLoc(_newip){
  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip='+_newip,
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0647bc5201msh84a9358b48d00eep163485jsne7ecf062e49f',
      'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
    }
  };
  
  $.ajax(settings).done(function (response) {
    let stringrede = JSON.stringify(response.cidr)
    console.log(stringrede)
    var div = document.createElement("div");
    div.classList.add('padrao');
    if(!(stringrede).includes("null")){
        try{
        div.innerHTML = 'ip : ' + response.ip + '<br>'+
        'rede : ' + response.cidr + '<br>'+
        'continente : '+ response.continent + '<br>'+
        'país : ' + response.country + '<br>'+
        'região : ' + response.region + '<br>'+
        'cidade : ' + response.city + '<br>' +
        'vpn/proxy : ' + response.is_vpn_proxy + '<br>'
        }
    catch{
      console.log('Erro ao obter informações sobre o endereço IP. Verifique suas configurações de privacidade de rede.')
      div.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Erro ao obter informações sobre o endereço IP. Verifique suas configurações de privacidade de rede.'
    }
  }
  else{
    div.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> IP inválido.'

  }
     document.getElementById("padrao2").append(div);
});




}

function resNetInfo(){
    $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
      console.log(JSON.stringify(data, null, 2));
      console.log(data);
      newdata = JSON.stringify(data)
      newdata2 = newdata.split("{").join("")
      newdata2 = newdata2.split("}").join("")
      newdata2 = newdata2.split('"').join('')
      newdata2 = newdata2.split(':').join(' : ')
      newdata2 = newdata2.split(",").join("<br />")
      var div = document.createElement("div");
      div.classList.add('padrao');
          try{
          div.innerHTML = newdata2
          }
      catch{
        console.log('Erro ao obter informações sobre o endereço IP. Verifique suas configurações de privacidade de rede.')
        div.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Erro ao obter informações sobre o endereço IP. Verifique suas configurações de privacidade de rede.'
      }
       document.getElementById("padrao2").append(div);
});

}

function pegarID(_url){
  newurl = _url.split('mp4 ').join('');
  newurl = _url.split('mp3 ').join('');
  newurl = newurl.match(/([a-z0-9_-]{11})/gim)[0]
}

function pegarIP(ip){
newip = ip.split('iploc ').join('');
resIpLoc(newip);
}

function duvidaMp4(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao mp4:'  +
  '<br/>mp4 + [URL DO YOUTUBE]' +
  '<br/>ex: mp4 https://youtu.be/3ZnHr62W72Q' +
  '<br/><br/><i class="fa-solid fa-circle-info"></i> Este comando é utilizado para baixar vídeos do YouTube. ' 
  document.getElementById("padrao2").append(div);
}

function duvidaMp3(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao mp3:'  +
  '<br/>mp3 + [URL DO YOUTUBE]' +
  '<br/>ex: mp3 https://youtu.be/3ZnHr62W72Q' +
  '<br/><br/><i class="fa-solid fa-circle-info"></i> Este comando é utilizado para baixar áudios de vídeos do YouTube. ' 
  document.getElementById("padrao2").append(div);
}

function duvidaIploc(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao iploc:'  +
  '<br/>iploc + [ipv4]' +
  '<br/>ex: iploc 8.8.8.8' +
  '<br/><br/><i class="fa-solid fa-circle-info"></i> Este comando é utilizado para obter informações sobre um Ipv4 ' 
  document.getElementById("padrao2").append(div);
}

function duvidaShort(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao short:'  +
  '<br/>short + [URL]' +
  '<br/>ex: short google.com' +
  '<br/><br/><i class="fa-solid fa-circle-info"></i> Este comando é utilizado para encurtar URLs. ' 
  document.getElementById("padrao2").append(div);
}

function resShort(x){

  input_url = x.split('short ').join('');

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Encurtando URL...'
  document.getElementById("padrao2").append(div);

  if(input_url.startsWith("http")){

  }
  else{
    input_url = ("https://"+input_url)
  }

  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://url-shortener23.p.rapidapi.com/shorten',
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '0647bc5201msh84a9358b48d00eep163485jsne7ecf062e49f',
      'X-RapidAPI-Host': 'url-shortener23.p.rapidapi.com'
    },
    processData: false,
    data: '{\r\n    "url": "'+ input_url +'",\r\n    "alias": ""\r\n}'
  };


  $.ajax(settings).done(function (response) {
    console.log(response);
    div.innerHTML = 'Sua URL foi encurtada para: ' + response.short_url + ' e já está disponível no seu CTRL+V'
    document.getElementById("padrao2").append(div);

    navigator.clipboard.writeText(response.short_url);

  });




}

function resMp4(video_id){
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id='+video_id, //UxxajLWwzqY',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0647bc5201msh84a9358b48d00eep163485jsne7ecf062e49f',
		'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
  console.log(response.formats[2].url)
  window.open(response.formats[2].url,'_blank');
});

var div = document.createElement("div");
div.classList.add('padrao');
div.innerHTML = 'victorsales\\portifolio\\terminal\\ > Download inicado em nova guia.'
document.getElementById("padrao2").append(div);

}

function resMp3(video_id){
  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://youtube-mp36.p.rapidapi.com/dl?id='+video_id,
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0647bc5201msh84a9358b48d00eep163485jsne7ecf062e49f',
      'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
    }
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log(response.link[0])
    window.open(response.link,'_blank');
  });

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'victorsales\\portifolio\\terminal\\ > Download inicado em nova guia.'
  document.getElementById("padrao2").append(div);

  }

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let _input = document.getElementsByName('fname')[0];
    if(!x.startsWith("mp")){
      x = x.toLowerCase();
    }
    else{}

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
    else if (x.includes("mp4 ")) {
      try{
        divPadrao(x);
        pegarID(x);
        resMp4(newurl)
      }
      catch{
      }
      _input.value= "";
      return false;
    }
    else if (x.includes("mp4")) {
      divPadrao(x);
      duvidaMp4();
      _input.value= "";
      return false;
    }

    else if (x.includes("mp3 ")) {
      try{
        divPadrao(x);
        pegarID(x);
        resMp3(newurl)
      }
      catch{

      }

      _input.value= "";
      return false;
    }
    else if (x.includes("mp3")) {
      divPadrao(x);
      duvidaMp3();
      _input.value= "";
      return false;
    }

    else if (x == "lang" || x == "idioma" || x == "language" || x == "lingua") {
      divPadrao(x);
      resLang();
      _input.value= "";
      return false;
    }

    else if (x == "netinfo" || x=="ipconfig" || x=="ip") {
      divPadrao(x);
      resNetInfo();
      _input.value= "";
      return false;
    }

    else if (x ==("iploc")) {
      divPadrao(x);
      duvidaIploc(x);
      _input.value= "";
      return false;
    }

    else if (x.startsWith("iploc ")) {
      divPadrao(x);
      pegarIP(x);
      _input.value= "";
      return false;
    }

    else if (x ==("short")) {
      divPadrao(x);
      duvidaShort();
      _input.value= "";
      return false;
    }

    else if (x.startsWith("short ")) {
      divPadrao(x);
      resShort(x);
      _input.value= "";
      return false;
    }

    else {
      comandoInvalido(x);
      _input.value= "";
    }
  }
