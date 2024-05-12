var historico = []
var aumento = 0;
var darkcolor = "rgb(50, 128, 57)"


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

function colorirDivPadrao(){
  var elementoWelcome = document.querySelector('.welcome');
  elementoWelcome.style.removeProperty('color');
  elementoWelcome.style.color = darkcolor;
  var elementosTerminal = document.querySelectorAll('.myTerminal');
  elementosTerminal.forEach(function(elemento) {
      elemento.style.removeProperty('color');
      elemento.style.color = darkcolor;
  });
}

function divPadrao(x){

  var listaDeComandos = ["mp3", "mp4", "short", "arquivo", "clear","cls","help","ajuda","color","qr","sobre","iploc", "fonte", "font", "read", "ler", "ai", "ia", "chat"];
  listaDeComandos.forEach(comando => {
      if (x.startsWith(comando + " ") || x === comando) { // Verifica se a string começa com o comando ou é exatamente igual ao comando
        var y = removerParteDaString(x, comando);
        console.log(y); 
  
        var div = document.createElement("div");
        div.classList.add('padrao');
        div.innerHTML = "<div class='myTerminal'>myterminal ></div> " + y;
        document.getElementById("padrao2").append(div);
      }
  });
}


function autoScrollDown(){
  window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
}

function comandoInvalido(x){
  var error = " <div class='erroSimples'> <-- COMANDO NÃO RECONHECIDO PELO SISTEMA! </div>"
  
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = "<div class='myTerminal'>myterminal ></div> " + x + error;
  document.getElementById("padrao2").append(div);
  //alert("Comando inválido");
}

function resHelp(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'myterminal > Lista de todos os comandos disponíveis :' + '<div class="information">' +
  //'<br/>arquivo' +
  '<br/>clear' +
  '<br/>color' +
  //'<br/>font' +
  '<br/>fonte' +
  '<br/>help' +
  '<br/>ia' +
  //'<br/>ipconfig' +
  '<br/>iploc'+
  //'<br/>lang' +
  '<br/>mp3' +
  '<br/>mp4' +
  '<br/>qr'+
  '<br/>read'+
  '<br/>short'+
  '<br/>sobre' +
  "</div>"
  //'<br/>wpp' 

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

  darkcolor = "rgb(50, 128, 57)";
}

function resColorRed(){
  document.documentElement.style.color="red";
  document.getElementsByTagName('input')[0].style.color="red";
  document.getElementsByTagName('a')[0].style.color="red";
  $('.logostl').attr("src","imgs/redman.gif");

  darkcolor = 'rgb(138 5 5)';
}

function resColorBlue(){
  document.documentElement.style.color="rgb(53, 130, 230)";
  document.getElementsByTagName('input')[0].style.color="rgb(53, 130, 230)";
  document.getElementsByTagName('a')[0].style.color="rgb(53, 130, 230)";
  $('.logostl').attr("src","imgs/blueman.gif");

  darkcolor = 'rgb(66 68 151)';
}

function resColorWhite(){
  document.documentElement.style.color="white";
  document.getElementsByTagName('input')[0].style.color="white";
  document.getElementsByTagName('a')[0].style.color="white";
  $('.logostl').attr("src","imgs/whiteman.gif");

  darkcolor = 'rgb(84 84 84)'

}

function resColorPink(){
  document.documentElement.style.color="#cb7dff";
  document.getElementsByTagName('input')[0].style.color="#cb7dff";
  document.getElementsByTagName('a')[0].style.color="#cb7dff";
  $('.logostl').attr("src","");
  //$('.logostl').attr("src","https://im2.ezgif.com/tmp/ezgif-2-52fd5176f7.gif");
  
  darkcolor = 'rgb(94 61 102)'
}

function resColorOrange(){
  document.documentElement.style.color="orange";
  document.getElementsByTagName('input')[0].style.color="orange";
  document.getElementsByTagName('a')[0].style.color="orange";
  $('.logostl').attr("src","");

  darkcolor = 'rgb(138 79 11)' 
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

function resFonte(newFontesize){
  var div = document.createElement("div");
  div.classList.add('padrao');
  if(newFontesize > 30){
    newFontesize = 30
        div.innerHTML = 'Você escolheu um tamanho muito pequeno, a fonte foi alterada para o tamanho: ' + newFontesize;
  }
  else if (newFontesize < 10){
    newFontesize = 10
    div.innerHTML = 'Você escolheu um tamanho muito pequeno, a fonte foi alterada para o tamanho: ' + newFontesize;
  }
  else{
    div.innerHTML = 'Tamanho da fonte alterado para: ' + newFontesize;
  }
  var fontepx = newFontesize + 'px'; 
  var inputHtml = document.getElementsByTagName('input')[0]
  inputHtml.style.fontSize = fontepx;
  document.body.style.fontSize = fontepx;
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

function pegarURL(_url){
  newurlInstagram = _url.split('mp4 ').join('');
  newurlInstagram = _url.split('mp3 ').join('');
  return newurlInstagram;
}

function pegarIP(ip){
newip = ip.split('iploc ').join('');
resIpLoc(newip);
}

function pegarFonteSize(fontesize){
  if(fontesize[4] == "e"){
    newFontesize = fontesize.split('fonte ').join('');
  }
  else{
    newFontesize = fontesize.split('font ').join('');
  }

  resFonte(newFontesize);
  }

function duvidaMp4(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao mp4:'  +
  '<br/>mp4 + [URL]' +
  '<br/>ex: mp4 https://youtu.be/3ZnHr62W72Q' +
  '<br/><br/><i class="fa-solid fa-circle-info"></i> Este comando é utilizado para baixar vídeos do YouTube, Instagram, Facebook, Twitter, Tiktok e Reddit em 720p.' 
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

function duvidaIA(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao ia:'  +
  '<br/>ia + [Texto]' +
  '<br/>ex: ia Por quê o Cruzeiro é o melhor time de Minas Gerais?' +
  '<br/><br/><i class="fa-solid fa-circle-info"></i> Este comando é utilizado para gerar uma conversa com o chat GPT.' 
  document.getElementById("padrao2").append(div);
}

function duvidaRead(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao read:'  +
  '<br/>read + [URL]' +
  '<br/>ex: read https://www.estadao.com.br/economia/acordo-itaipu-conta-luz-obras/' +
  '<br/><br/><i class="fa-solid fa-circle-info"></i> Este comando é utilizado para visualizar sites de notícias passando pelo paywall. ' 
  document.getElementById("padrao2").append(div);
}

function duvidaFonte(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao fonte:'  +
  '<br/>fonte + [Número da fonte]' +
  '<br/>ex: fonte 18' +
  '<br/><br/><i class="fa-solid fa-circle-info"></i> Este comando é utilizado para mudar o tamanho da fonte, o valor padrão é 16. ' 
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

function duivdaArquivo(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Lista de comandos disponíveis junto ao Arquivo:'  +
  '<br/>arquivo + [Nome do Arquivo]' +
  '<br/>ex: arquivo cachepass' +
  '<br/>Arquivos disponíveis:' +
  '<br/><ul><li>CachePass</li></ul>' +
  '<i class="fa-solid fa-circle-info"></i> Este comando é utilizado para baixar arquivos.' 
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

function resIA(x){
  if(x.startsWith("ia ")){
    input_url = x.split('ia ').join('');
  }
  else if(x.startsWith("ai ")){
    input_url = x.split('ai ').join('');
  }
  else if(x.startsWith("chat ")){
    input_url = x.split('chat ').join('');
  }

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Enviando sua mensagem aos servidores do Chat GPT...'
  document.getElementById("padrao2").append(div);

  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions',
    method: 'POST',
    headers: {
      'x-rapidapi-key': '0647bc5201msh84a9358b48d00eep163485jsne7ecf062e49f',
      'x-rapidapi-host': 'chatgpt-best-price.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    processData: false,
    data: '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"' + input_url + '"}]}'
  };
  
  try{

  $.ajax(settings).done(function (response) {
    div.innerHTML = "🤖 " + response.choices[0].message.content;
  });
      
}catch{
  div.innerHTML = "Houve um erro ao se conectar com a API do Chat GPT."
}
}

function resArquivoCachePass(x){
  input_url = x.split('wpp ').join('');

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Download de CachePass iniciado em nova aba.'
  document.getElementById("padrao2").append(div);

    var win = window.open("https://github.com/v1ctorsales/Senhas-Wifi/raw/main/Cache.Pass.exe")
}

function resQR(x){ //dando erro

  input_url = x.split('qr ').join('');

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Criando QR Code...'
  document.getElementById("padrao2").append(div);

  if(input_url != ''){

    if(input_url.startsWith("http")){

    }
    else{
      input_url = ("https://"+input_url)
    }
  }
  else{
    div.innerHTML = 'URL inválida'
  }

  try{
    div.innerHTML = 'QR Code de '+ input_url + ' gerado com sucesso! <br> <br>' + '<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+input_url+'">'
  }
  catch{
    div.innerHTML = 'Erro ao gerar o QR Code'
  }

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
    url: 'https://url-shortener-service.p.rapidapi.com/shorten',
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '0647bc5201msh84a9358b48d00eep163485jsne7ecf062e49f',
      'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
    },
    data: {
      url: input_url
    }
  };


  $.ajax(settings).done(function (response) {
    console.log(response);
    div.innerHTML = 'Sua URL foi encurtada para: ' + response['result_url'] + ' e já está disponível no seu CTRL+V'
    document.getElementById("padrao2").append(div);

    navigator.clipboard.writeText(response['result_url'] );

  });




}

function resRead(x){

  if(x.startsWith("read ")){
    url = x.split('read ').join('');
  }
  else if(x.startsWith("ler ")){
    url = x.split('ler ').join('');
  }

  window.open("https://leiaisso.net/" + url) 

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = 'Página aberta em nova aba. Boa leitura!'
  document.getElementById("padrao2").append(div);

}

function resMp4Youtube(video_id){
  var div = document.createElement("div");
div.classList.add('padrao');
console.log(video_id);

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
  
try{
$.ajax(settings).done(function (response) {
	console.log(response.data);
  console.log(response.formats[1].url)
  window.open(response.formats[1].url,'_blank');
});
}
catch(err){
  console.log(err);
}


div.innerHTML = 'myterminal > Download inicado em nova guia.'
document.getElementById("padrao2").append(div);

}

function resMp4Instagram(ulrInstagram, type){

  if(ulrInstagram.includes("mp4 ")){
    ulrInstagram = ulrInstagram.split('mp4 ').join('');
  }

  var div = document.createElement("div");
  div.classList.add('padrao');

  div.innerHTML = 'myterminal > Iniciando o download...'

  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/'+ type +'.php?url=' + ulrInstagram,
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0647bc5201msh84a9358b48d00eep163485jsne7ecf062e49f',
      'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
    }
  };
  try{
  $.ajax(settings).done(function (response) {
    console.log(response);
    if(response == ""){
      div.innerHTML = 'myterminal > Erro! Não temos acesso a conteúdos de contas privadas.';
    }
    else{
      window.open(response.video,'_blank');
      div.innerHTML = 'myterminal > Download inicado em nova guia.';
    }

  });
}
catch{
  console.log(err);
}

document.getElementById("padrao2").append(div);
}

function resMp4Twitter(ulrInstagram){

  if(ulrInstagram.includes("mp4 ")){
    ulrInstagram = ulrInstagram.split('mp4 ').join('');
  }

  var div = document.createElement("div");
  div.classList.add('padrao');

  div.innerHTML = 'myterminal > Iniciando o download...'

  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://twitter-downloader-download-twitter-videos-gifs-and-images.p.rapidapi.com/status?url=' + ulrInstagram,
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0647bc5201msh84a9358b48d00eep163485jsne7ecf062e49f',
      'X-RapidAPI-Host': 'twitter-downloader-download-twitter-videos-gifs-and-images.p.rapidapi.com'
    }
  };
  try{
  $.ajax(settings).done(function (response) {
    console.log(response.media.video.videoVariants[0].url);
    window.open(response.media.video.videoVariants[0].url,'_blank');
    div.innerHTML = 'myterminal > Download inicado em nova guia.';
  });
}
catch{
  console.log(err);
}

document.getElementById("padrao2").append(div);
}

function resMp4Outros(ulrInstagram){

  if(ulrInstagram.includes("mp4 ")){
    ulrInstagram = ulrInstagram.split('mp4 ').join('');
  }

  if(ulrInstagram.includes("web.")){
    ulrInstagram = ulrInstagram.split('web.').join('');
  }

  var div = document.createElement("div");
  div.classList.add('padrao');

  div.innerHTML = 'myterminal > Iniciando o download...'

  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://all-media-downloader.p.rapidapi.com/download',
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '0647bc5201msh84a9358b48d00eep163485jsne7ecf062e49f',
      'X-RapidAPI-Host': 'all-media-downloader.p.rapidapi.com'
    },
    data: {
      url: ulrInstagram
    }
  };

  try{
  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log(response['720P'].url);
    window.open(response['720P'].url,'_blank');
    div.innerHTML = 'myterminal > Download inicado em nova guia.';
  });
}
catch{
  console.log(err);
}

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
    div.innerHTML = 'myterminal > Download inicado em nova guia.'
    console.log(response);
    console.log(response.link[0])
    window.open(response.link,'_blank');
  });


  document.getElementById("padrao2").append(div);

  }

  function removerParteDaString(texto, parteASerRemovida) {
    // Verificar se a parteASerRemovida está presente na string
    var indice = texto.indexOf(parteASerRemovida);
  
    // Se a parteASerRemovida for encontrada, remover e envolver com a classe "information"
    if (indice !== -1) {
      var parteRemovida = texto.slice(indice, indice + parteASerRemovida.length);
      var resultado = texto.replace(parteRemovida, "<div class='information'>" + parteRemovida + "</div>");
      return resultado;
    } else {
      // Se a parteASerRemovida não for encontrada, retornar a string original
      return texto;
    }
  }
  


function validateForm() {

  var elementos = document.querySelectorAll('.myTerminal');
    let x = document.forms["myForm"]["fname"].value;
    let _input = document.getElementsByName('fname')[0];
    Armazenar(x);
    colorirDivPadrao();

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
      colorirDivPadrao()
      _input.value= "";
      return false;
    }
    else if (x == "color red") {
      divPadrao(x);
      resColorRed();
      autoScrollDown();
      colorirDivPadrao();
      _input.value= "";
      return false;
    }
    else if (x == "color blue") {
      divPadrao(x);
      resColorBlue();
      autoScrollDown();
      colorirDivPadrao()
      _input.value= "";
      return false;
    }
    else if (x == "color white") {
      divPadrao(x);
      resColorWhite();
      autoScrollDown();
      colorirDivPadrao()
      _input.value= "";
      return false;
    }
    else if (x == "color pink") {
      divPadrao(x);
      resColorPink();
      autoScrollDown();
      colorirDivPadrao()
      _input.value= "";
      return false;
    }
    else if (x == "color orange") {
      divPadrao(x);
      resColorOrange();
      autoScrollDown();
      colorirDivPadrao()
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
    else if (x == "fonte" || x=="font") {
      divPadrao(x);
      duvidaFonte();
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x.includes("fonte ") || x.includes("font ")) {
      divPadrao(x);
      pegarFonteSize(x);
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x.includes("mp4 ")) {
      try{
        divPadrao(x);
        if(x.includes("youtube.") || x.includes("yout.") || x.includes("youtu."))
        {
          pegarID(x); 
          resMp4Youtube(newurl)
        }
        else if (x.includes("instagram") && x.includes("/stories/"))
        {
          pegarURL(x)
          type = 'stories'
          resMp4Instagram(newurlInstagram, type)
        }
        else if (x.includes("instagram") && x.includes("m/p/"))
        {
          pegarURL(x)
          type = 'post'
          resMp4Instagram(newurlInstagram, type)
        }
        else if (x.includes("instagram") && x.includes("/reel/"))
        {
          pegarURL(x)
          type = 'post'
          resMp4Instagram(newurlInstagram, type)
        }
        else if (x.includes("twitter"))
        {
          pegarURL(x)
          resMp4Twitter(newurlInstagram)
        }
        else if (x.includes("tikTok") || x.includes("facebook") || x.includes("reddit")){
          pegarURL(x)
          resMp4Outros(newurlInstagram)
        }

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

    else if (x ==("arquivo") || (x == "arq")) {
      divPadrao(x);
      duivdaArquivo(x);
      autoScrollDown();
      _input.value= "";
      return false;
    }

    else if (x ==("arquivo cachepass") || (x == "arq cachepass")) {
      divPadrao(x);
      resArquivoCachePass(x);
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x ==("read") || (x == "ler")) {
      divPadrao(x);
      duvidaRead();
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x.startsWith("read ") || x.startsWith("ler ")) {
      divPadrao(x);
      resRead(x);
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x ==("ai") || (x == "ia") || (x == "chat")){
      divPadrao(x);
      duvidaIA();
      autoScrollDown();
      _input.value= "";
      return false;
    }
    else if (x.startsWith("ai ") || x.startsWith("ia ") || x.startsWith("chat ")) {
      divPadrao(x);
      resIA(x);
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
