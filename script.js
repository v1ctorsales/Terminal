var historico = []
var aumento = 0;

function Armazenar (x){
  historico.push(x)
  console.log(historico[historico.length - 1])
}

function SetaCima() {
    aumento++;
    if(historico[historico.length - aumento] != undefined){
    document.getElementById("inputform").value = historico[historico.length - aumento];
    }
    else{

    }
    if(aumento > historico.length -1){
      aumento = 0;
    }
}

function SetaBaixo(){
  aumento--;
  if(historico[historico.length - aumento] != undefined){
  document.getElementById("inputform").value = historico[historico.length - aumento];
  }
  else{

  }
  if(aumento < 2){
    aumento = historico.length+1
  }
}

function divPadrao(x){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = "victorsales\\portifolio\\terminal\\ > " + x;
  document.getElementById("padrao2").append(div);
}

function autoScrollDown(){
  window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
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
  '<br/>qr'+
  '<br/>short'+
  '<br/>sobre' +
  '<br/>wpp'

  document.getElementById("padrao2").append(div);
      window.scrollTo(0, document.body.scrollHeight);
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
  document.getElementsByTagName('a')[0].style.color="rgb(110, 247, 110)";
  $('.logostl').attr("src","imgs/greenman.gif");
}

function resColorRed(){
  document.documentElement.style.color="red";
  document.getElementsByTagName('input')[0].style.color="red";
  document.getElementsByTagName('a')[0].style.color="red";
  $('.logostl').attr("src","imgs/redman.gif");
}

function resColorBlue(){
  document.documentElement.style.color="rgb(53, 130, 230)";
  document.getElementsByTagName('input')[0].style.color="rgb(53, 130, 230)";
  document.getElementsByTagName('a')[0].style.color="rgb(53, 130, 230)";
  $('.logostl').attr("src","imgs/blueman.gif");
}

function resColorWhite(){
  document.documentElement.style.color="white";
  document.getElementsByTagName('input')[0].style.color="white";
  document.getElementsByTagName('a')[0].style.color="white";
  $('.logostl').attr("src","imgs/whiteman.gif");
}

function resColorPink(){
  document.documentElement.style.color="#fc03ad";
  document.getElementsByTagName('input')[0].style.color="#fc03ad";
  document.getElementsByTagName('a')[0].style.color="#fc03ad";
  $('.logostl').attr("src","");
  //$('.logostl').attr("src","https://im2.ezgif.com/tmp/ezgif-2-52fd5176f7.gif");
}

function resColorOrange(){
  document.documentElement.style.color="orange";
  document.getElementsByTagName('input')[0].style.color="orange";
  document.getElementsByTagName('a')[0].style.color="orange";
  $('.logostl').attr("src","");
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
  '<br/><br/>Este Terminal foi desenvolvido por Victor Sales e tem o intuito de reunir ferramentas úteis para o desenvolvedor.' +
  '<br/>Quem sabe você não encontra algo útil pra você também?'+
  '<br/>O aplicativo foi desenvolvido com HTML, CSS e JavaScript'
  document.getElementById("padrao2").append(div);
}

function resIpLoc(_newip){

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = "Carregando informações sobre o IP..."
  document.getElementById("padrao2").append(div);

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
       autoScrollDown();
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

function duvidaQR(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao QR:'  +
  '<br/>qr + [URL]' +
  '<br/>ex: qr google.com' +
  '<br/><br/><i class="fa-solid fa-circle-info"></i> Este comando é utilizado para criar um QR Code com destino à uma URL. ' 
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

function duvidaWpp(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao wpp:'  +
  '<br/>wpp + [Número de Telefone]' +
  '<br/>ex: wpp 553171239966' +
  '<br/><br/><i class="fa-solid fa-circle-info"></i> Este comando é utilizado para enviar mensagens via whatsapp. ' 
  document.getElementById("padrao2").append(div);
}

function resmandarMsg(x){
  input_url = x.split('wpp ').join('');

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Solicitação de mensagem aberta em nova aba.'
  document.getElementById("padrao2").append(div);

    var win = window.open("https://wa.me/"+input_url)
}
function resQR(x){ //dando erro

  input_url = x.split('qr ').join('');

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Criando QR Code...'
  document.getElementById("padrao2").append(div);

  if(input_url.startsWith("http")){

  }
  else{
    input_url = ("https://"+input_url)
  }

  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://qr-code78.p.rapidapi.com/generate_qr?url='+ input_url,
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0647bc5201msh84a9358b48d00eep163485jsne7ecf062e49f',
      'X-RapidAPI-Host': 'qr-code78.p.rapidapi.com'
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    div.innerHTML =  'QR Code de '+input_url+' gerado:<br><br>'+ 
    '<img src="'+response.qr_url+'" alt="Minha Figura"></img>'
  });

  };

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
  var div = document.createElement("div");
div.classList.add('padrao');

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


div.innerHTML = 'victorsales\\portifolio\\terminal\\ > Download inicado em nova guia.'
document.getElementById("padrao2").append(div);

}

function resMp3(video_id){
  var div = document.createElement("div");
  div.classList.add('padrao');

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
    div.innerHTML = 'victorsales\\portifolio\\terminal\\ > Download inicado em nova guia.'
    console.log(response);
    console.log(response.link[0])
    window.open(response.link,'_blank');
  });


  document.getElementById("padrao2").append(div);

  }

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let _input = document.getElementsByName('fname')[0];
    Armazenar(x);

    if(!x.startsWith("mp")){
      x = x.toLowerCase();
    }
    else{}

    if (x == "help" || x == "ajuda") {
      divPadrao(x);
      resHelp();
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x == "color") {
      divPadrao(x);
      resColor();
      _input.value= "";
      autoScrollDown();
      return false;
    }
    else if (x == "color green") {
      divPadrao(x);
      resColorGreen();
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x == "color red") {
      divPadrao(x);
      resColorRed();
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x == "color blue") {
      divPadrao(x);
      resColorBlue();
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x == "color white") {
      divPadrao(x);
      resColorWhite();
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x == "color pink") {
      divPadrao(x);
      resColorPink();
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x == "color orange") {
      divPadrao(x);
      resColorOrange();
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x == "clear" || x== "cls") {
      divPadrao(x);
      resClear();
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x == "sobre" || x=="about") {
      divPadrao(x);
      resSobre();
      autoScrollDown();
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
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x.includes("mp4")) {
      divPadrao(x);
      duvidaMp4();
      autoScrollDown();
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
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x.includes("mp3")) {
      divPadrao(x);
      duvidaMp3();
      autoScrollDown();
      _input.value= "";
      return false;
    }

    else if (x == "lang" || x == "idioma" || x == "language" || x == "lingua") {
      divPadrao(x);
      resLang();
      autoScrollDown();
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
      autoScrollDown();
      _input.value= "";
      return false;
    }

    else if (x.startsWith("iploc ")) {
      divPadrao(x);
      pegarIP(x);
      autoScrollDown();
      _input.value= "";
      return false;
    }

    else if (x == "qr") {
      divPadrao(x);
      duvidaQR();
      autoScrollDown();
      _input.value= "";
      return false;
    }

    else if (x.startsWith("qr ")) {
      divPadrao(x);
      resQR(x);
      autoScrollDown();
      _input.value= "";
      return false;
    }

    else if (x ==("short")) {
      divPadrao(x);
      duvidaShort();
      autoScrollDown();
      _input.value= "";
      return false;
    }

    else if (x.startsWith("short ")) {
      divPadrao(x);
      resShort(x);
      autoScrollDown();
      _input.value= "";
      return false;
    }

    else if (x ==("msg") || x==("wpp")) {
      divPadrao(x);
      duvidaWpp();
      autoScrollDown();
      _input.value= "";
      return false;
    }

    else if (x.startsWith("wpp ")) {
      divPadrao(x);
      resmandarMsg(x);
      autoScrollDown();
      _input.value= "";
      return false;
    }

    else {
      comandoInvalido(x);
      autoScrollDown();
      _input.value= "";
    }
    return
  }
