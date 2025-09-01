/********** I18N **********/
let currentLang = (localStorage.getItem('lang') || 'ptbr').toLowerCase();

const i18n = {
  ptbr: {
    labels: {
      prompt: "myterminal >",
    },
    info: {
      helpTitle: "Lista de todos os comandos disponíveis :",
      langHelp: "Estes comandos são utilizados para trocar o idioma dos textos no terminal.",
      colorHelpTitle: "Lista de comandos disponíveis junto ao color:",
      fontChanged: (n)=>`Tamanho da fonte alterado para: ${n}`,
      fontTooBig: (n)=>`Você escolheu um tamanho muito grande, a fonte foi alterada para o tamanho: ${n}`,
      fontTooSmall: (n)=>`Você escolheu um tamanho muito pequeno, a fonte foi alterada para o tamanho: ${n}`,
      pageOpened: "Página aberta em nova aba. Boa leitura!",
      sendingToGPT: "Enviando sua mensagem aos servidores do Chat GPT...",
      startingDownload: "Iniciando o download...",
      downloadStarted: "Download iniciado em nova guia.",
      downloadsStarted: "Download iniciado em novas guias.",
      makingQR: "Criando QR Code...",
      invalidURL: "URL inválida",
      qrOk: (u)=>`QR Code de ${u} gerado com sucesso!`,
      shortingURL: "Encurtando URL...",
      shortDone: (u)=>`Sua URL foi encurtada para: ${u} e já está disponível no seu CTRL+V`,
      ipLoading: "Carregando informações sobre o IP...",
      msgOpened: "Solicitação de mensagem aberta em nova aba.",
      cachePass: "Download de CachePass iniciado em nova aba.",
      about: "Mais informações sobre este sistema:",
      aboutBody: "Este Terminal foi desenvolvido por Victor Sales e tem o intuito de reunir ferramentas úteis para o desenvolvedor. Quem sabe você não encontra algo útil pra você também? O aplicativo foi desenvolvido com HTML, CSS e JavaScript",
      langSetOk: (code)=>`Idioma alterado para ${code.toUpperCase()}.`,
      ipLabel: (k,v)=>`${k} : ${v}`,
    },
    errors: {
      unknownCommand: "COMANDO NÃO RECONHECIDO PELO SISTEMA!",
      ipError: "Erro ao obter informações sobre o endereço IP. Verifique suas configurações de privacidade de rede.",
      ipInvalid: "IP inválido.",
      tiktokErr: "Houve um erro ao baixar o vídeo do TikTok.",
      ytErr: "Houve um erro ao baixar o vídeo do YouTube.",
      instaErr: "Houve um erro ao baixar o vídeo do Instagram.",
      twitterErr: "Houve um erro ao baixar o vídeo do Twitter.",
      otherSitesErr: "Houve um erro ao baixar o vídeo de outros sites.",
      audioErr: "Houve um erro ao baixar o áudio.",
      shortErr: "Houve um erro ao encurtar a URL.",
      gptErr: "Houve um erro ao se conectar com o Chat GPT.",
      popupBlocked: "Falha ao abrir nova aba. Desative o bloqueador de pop-ups.",
      privateInsta: "Erro! Não temos acesso a conteúdos de contas privadas.",
      downloadFail: "Não foi possível iniciar o download.",
      langUnknown: (code)=>`Idioma '${code}' não suportado. Use: ptbr | eng`,
    },
    help: {
      items: [
        ["clear", "Limpe o chat"],
        ["color", "Mude a cor do texto"],
        ["fonte", "Mude o tamanho da fonte"],
        ["help", "Acho que você já sabe o quê esse comando faz"],
        ["ia", "Inicie uma conversa com o ChatGPT"],
        ["iploc", "Localize um IP"],
        ["lang", "Mude o idioma"],
        ["mp3", "Baixe um áudio do Youtube ou Spotify"],
        ["mp4", "Baixe um vídeo de (quase) qualquer site"],
        ["qr", "Crie um QRcode"],
        ["short", "Encurte URLs"],
        ["sobre", "Informações sobre o sistema"],
      ]
    },
    guides: {
      lang: ["lang ptbr", "lang eng"],
      color: ['color blue','color green','color pink','color red','color white','color yellow'],
      mp4: ['mp4 + [URL]', 'ex: mp4 https://youtu.be/3ZnHr62W72Q', 'Este comando é utilizado para baixar vídeos do YouTube, Instagram, Facebook, Twitter, Tiktok e Reddit em 720p.'],
      mp3: ['mp3 + [URL]', 'ex: mp3 https://youtu.be/3ZnHr62W72Q', 'Este comando é utilizado para baixar áudios do YouTube ou Spotify.'],
      qr:  ['qr + [URL]', 'ex: qr google.com', 'Este comando é utilizado para criar um QR Code com destino à uma URL.'],
      iploc: ['iploc + [ipv4]', 'ex: iploc 8.8.8.8', 'Este comando é utilizado para obter informações sobre um Ipv4'],
      short:['short + [URL]', 'ex: short google.com', 'Este comando é utilizado para encurtar URLs.'],
      ia:  ['ia + [Texto]', 'ex: ia Por quê o Cruzeiro é o melhor time de Minas Gerais?', 'Este comando é utilizado para gerar uma conversa com o chat GPT.'],
      read:['read + [URL]', 'ex: read https://www.estadao.com.br/...', 'Este comando é utilizado para visualizar sites de notícias passando pelo paywall.'],
      fonte:['fonte + [Número da fonte]', 'ex: fonte 18', 'Este comando é utilizado para mudar o tamanho da fonte, o valor padrão é 16.'],
      wpp: ['wpp + [Número de Telefone]', 'ex: wpp 553171239966', 'Este comando é utilizado para enviar mensagens via whatsapp.'],
      arquivo:['arquivo + [Nome do Arquivo]', 'ex: arquivo cachepass', 'Arquivos disponíveis: CachePass', 'Este comando é utilizado para baixar arquivos.']
    }
  },

  eng: {
    labels: {
      prompt: "myterminal >",
    },
    info: {
      helpTitle: "List of all available commands:",
      langHelp: "These commands are used to change the terminal language.",
      colorHelpTitle: "Available commands for color:",
      fontChanged: (n)=>`Font size changed to: ${n}`,
      fontTooBig: (n)=>`You chose a very large size, font set to: ${n}`,
      fontTooSmall: (n)=>`You chose a very small size, font set to: ${n}`,
      pageOpened: "Page opened in a new tab. Enjoy!",
      sendingToGPT: "Sending your message to ChatGPT servers...",
      startingDownload: "Starting download...",
      downloadStarted: "Download started in a new tab.",
      downloadsStarted: "Downloads started in new tabs.",
      makingQR: "Creating QR Code...",
      invalidURL: "Invalid URL",
      qrOk: (u)=>`QR Code for ${u} generated successfully!`,
      shortingURL: "Shortening URL...",
      shortDone: (u)=>`Your URL was shortened to: ${u} and is on your clipboard`,
      ipLoading: "Loading IP information...",
      msgOpened: "Message request opened in a new tab.",
      cachePass: "CachePass download started in a new tab.",
      about: "More information about this system:",
      aboutBody: "This Terminal was developed by Victor Sales to gather useful tools for developers. Built with HTML, CSS and JavaScript.",
      langSetOk: (code)=>`Language changed to ${code.toUpperCase()}.`,
      ipLabel: (k,v)=>`${k} : ${v}`,
    },
    errors: {
      unknownCommand: "COMMAND NOT RECOGNIZED BY THE SYSTEM!",
      ipError: "Error getting IP info. Check your network privacy settings.",
      ipInvalid: "Invalid IP.",
      tiktokErr: "An error occurred while downloading the TikTok video.",
      ytErr: "An error occurred while downloading the YouTube video.",
      instaErr: "An error occurred while downloading the Instagram video.",
      twitterErr: "An error occurred while downloading the Twitter video.",
      otherSitesErr: "An error occurred while downloading the video.",
      audioErr: "An error occurred while downloading the audio.",
      shortErr: "An error occurred while shortening the URL.",
      gptErr: "An error occurred connecting to Chat GPT.",
      popupBlocked: "Failed to open a new tab. Disable your pop-up blocker.",
      privateInsta: "Error! We don’t have access to private accounts.",
      downloadFail: "Could not start the download.",
      langUnknown: (code)=>`Unsupported language '${code}'. Use: ptbr | eng`,
    },
    help: {
      items: [
        ["clear", "Clear the chat"],
        ["color", "Change text color"],
        ["font", "Change font size"],
        ["help", "You probably know what this does"],
        ["ai", "Start a conversation with ChatGPT"],
        ["iploc", "Locate an IP"],
        ["lang", "Change language"],
        ["mp3", "Download audio from YouTube or Spotify"],
        ["mp4", "Download video from (almost) any site"],
        ["qr", "Create a QR code"],
        ["short", "Shorten URLs"],
        ["about", "System information"],
      ]
    },
    guides: {
      lang: ["lang ptbr", "lang eng"],
      color: ['color blue','color green','color pink','color red','color white','color yellow'],
      mp4: ['mp4 + [URL]', 'e.g.: mp4 https://youtu.be/3ZnHr62W72Q', 'Downloads videos from YouTube, Instagram, Facebook, Twitter, Tiktok and Reddit in 720p.'],
      mp3: ['mp3 + [URL]', 'e.g.: mp3 https://youtu.be/3ZnHr62W72Q', 'Downloads audio from YouTube or Spotify.'],
      qr:  ['qr + [URL]', 'e.g.: qr google.com', 'Creates a QR Code pointing to a URL.'],
      iploc: ['iploc + [ipv4]', 'e.g.: iploc 8.8.8.8', 'Gets information about an IPv4 address'],
      short:['short + [URL]', 'e.g.: short google.com', 'Shortens URLs.'],
      ia:  ['ai + [Text]', 'e.g.: ai Why is Cruzeiro the best team in Minas?', 'Starts a conversation with ChatGPT.'],
      read:['read + [URL]', 'e.g.: read https://www.estadao.com.br/...', 'Bypasses paywalls for news pages.'],
      fonte:['font + [Font size number]', 'e.g.: font 18', 'Changes font size, default is 16.'],
      wpp: ['wpp + [Phone Number]', 'e.g.: wpp 553171239966', 'Opens WhatsApp message.'],
      arquivo:['arquivo + [File name]', 'e.g.: arquivo cachepass', 'Available: CachePass', 'Downloads files.']
    }
  }
};

function t(path, ...args){
  const segs = path.split('.');
  let node = i18n[currentLang];
  for(const s of segs){ node = (node||{})[s]; }
  if (typeof node === 'function') return node(...args);
  return node ?? path;
}

function setLanguage(code){
  // 1) limpa a tela como o comando clear
  resClear();

  // 2) normaliza código
  const map = { pt: 'ptbr', ptbr: 'ptbr', br: 'ptbr', en: 'eng', eng: 'eng', english: 'eng' };
  const norm = map[(code||'').toLowerCase()];

  // 3) cria um novo bloco após limpar
  const div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);

  if(!norm){
    // mensagem no idioma atual
    Digitar(t('errors.langUnknown', code));
    return;
  }

  // 4) aplica idioma e confirma
  currentLang = norm;
  localStorage.setItem('lang', currentLang);
  Digitar(t('info.langSetOk', currentLang));

  // (opcional) já mostra o help no novo idioma:
  // resHelp();
}


/********** ESTADO E VARS **********/
var historico = [];
var aumento = 0;
var darkcolor = "rgb(50, 128, 57)";
var controladorDivPadrao = 0;
let newurl, newurlInstagram, newip, type;

/********** FUNÇÕES AUX **********/
function Armazenar (x){
  historico.push(x);
  console.log(historico[historico.length - 1]);
}

function SetaCima() {
  aumento++;
  if(historico[historico.length - aumento] != undefined){
    document.getElementById("inputform").value = historico[historico.length - aumento];
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
  if(aumento < 2){
    aumento = historico.length+1;
  }
}

function colorirDivPadrao(){
  var elementoWelcome = document.querySelector('.welcome');
  if (elementoWelcome) elementoWelcome.style.removeProperty('color');
  var elementosTerminal = document.querySelectorAll('.myTerminal');
  elementosTerminal.forEach(function(elemento) {
    elemento.style.removeProperty('color');
  });
}

function divPadrao(x){
  var listaDeComandos = ["mp3", "mp4", "short", "arquivo", "clear","cls","help","ajuda","color","qr","sobre","iploc", "fonte", "font", "read", "ler", "ai", "ia", "chat", "lang", "language", "idioma", "lingua", "about"];
  listaDeComandos.forEach(comando => {
    if (x.startsWith(comando + " ") || x === comando) {
      var y = removerParteDaString(x, comando);
      var div = document.createElement("div");
      div.classList.add('padrao');
      div.innerHTML = "<div class='myTerminal'>" + t('labels.prompt') + "</div> " + y;
      document.getElementById("padrao2").append(div);
    }
  });
}

function autoScrollDown(){
  window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
}

function comandoInvalido(x){
  var errorHtml = " <div class='erroSimples'> <-- " + t('errors.unknownCommand') + " </div>";
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = "<div class='myTerminal'>" + t('labels.prompt') + "</div> " + x + errorHtml;
  document.getElementById("padrao2").append(div);
}

/********** RESPOSTAS DE AJUDA/INFO **********/
function resHelp() {
  const items = t('help.items');
  const maxLen = Math.max(...items.map(([cmd]) => cmd.length));
  const colWidthCh = maxLen + 2;

  const div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);

  let texto = `${t('labels.prompt')} ${t('info.helpTitle')}
<div class="information help-table">`;

  items.forEach(([cmd, desc]) => {
    texto += `
  <div class="help-row">
    <span class="help-cmd" style="display:inline-block;width:${colWidthCh}ch">${cmd}</span>
    <span class="help-desc tooltip">${desc}</span>
  </div>`;
  });

  texto += `</div>`;
  Digitar(texto);
}



function resColor(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);

  let texto = t('info.colorHelpTitle')
    + '<br/>' + t('guides.color')[0]
    + '<br/>' + t('guides.color')[1]
    + '<br/>' + t('guides.color')[2]
    + '<br/>' + t('guides.color')[3]
    + '<br/>' + t('guides.color')[4]
    + '<br/>' + t('guides.color')[5]
    + '<br/><br/><i class="fa-solid fa-circle-info"></i> ' + (currentLang === 'ptbr'
      ? 'Estes comandos são utilizados para trocar a cor dos textos no terminal. '
      : 'These commands change terminal text color.');
  Digitar(texto);
}

function resLang(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);
  let texto = (currentLang === 'ptbr'
      ? 'Lista de comandos disponíveis junto ao lang:'
      : 'Available commands for lang:')
    + '<br/>' + t('guides.lang')[0]
    + '<br/>' + t('guides.lang')[1]
    + '<br/><br/><i class="fa-solid fa-circle-info"></i> ' + t('info.langHelp');
  Digitar(texto);
}

function resSobre(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);
  let texto = t('info.about') +
    '<br/><br/>' + t('info.aboutBody');
  Digitar(texto);
}

function duvidaMp4(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);
  let g = t('guides.mp4');
  let texto = (currentLang === 'ptbr' ? 'Lista de comandos disponíveis junto ao mp4:' : 'Available commands for mp4:')
    + `<br/>${g[0]}`
    + `<br/>${g[1]}`
    + `<br/><br/><i class="fa-solid fa-circle-info"></i> ${g[2]}`;
  Digitar(texto);
}

function duvidaMp3(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);
  let g = t('guides.mp3');
  let texto = (currentLang === 'ptbr' ? 'Lista de comandos disponíveis junto ao mp3:' : 'Available commands for mp3:')
    + `<br/>${g[0]}`
    + `<br/>${g[1]}`
    + `<br/><br/><i class="fa-solid fa-circle-info"></i> ${g[2]}`;
  Digitar(texto);
}

function duvidaQR(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);
  let g = t('guides.qr');
  let texto = (currentLang === 'ptbr' ? 'Lista de comandos disponíveis junto ao QR:' : 'Available commands for qr:')
    + `<br/>${g[0]}`
    + `<br/>${g[1]}`
    + `<br/><br/><i class="fa-solid fa-circle-info"></i> ${g[2]}`;
  Digitar(texto);
}

function duvidaIploc(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);
  let g = t('guides.iploc');
  let texto = (currentLang === 'ptbr' ? 'Lista de comandos disponíveis junto ao iploc:' : 'Available commands for iploc:')
    + `<br/>${g[0]}`
    + `<br/>${g[1]}`
    + `<br/><br/><i class="fa-solid fa-circle-info"></i> ${g[2]}`;
  Digitar(texto);
}

function duvidaShort(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);
  let g = t('guides.short');
  let texto = (currentLang === 'ptbr' ? 'Lista de comandos disponíveis junto ao short:' : 'Available commands for short:')
    + `<br/>${g[0]}`
    + `<br/>${g[1]}`
    + `<br/><br/><i class="fa-solid fa-circle-info"></i> ${g[2]}`;
  Digitar(texto);
}

function duvidaIA(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);
  let g = t('guides.ia');
  let texto = (currentLang === 'ptbr' ? 'Lista de comandos disponíveis junto ao ia:' : 'Available commands for ai/ia:')
    + `<br/>${g[0]}`
    + `<br/>${g[1]}`
    + `<br/><br/><i class="fa-solid fa-circle-info"></i> ${g[2]}`;
  Digitar(texto);
}

function duvidaRead(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);
  let g = t('guides.read');
  let texto = (currentLang === 'ptbr' ? 'Lista de comandos disponíveis junto ao read:' : 'Available commands for read:')
    + `<br/>${g[0]}`
    + `<br/>${g[1]}`
    + `<br/><br/><i class="fa-solid fa-circle-info"></i> ${g[2]}`;
  Digitar(texto);
}

function duvidaFonte(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);
  let g = t('guides.fonte');
  let texto = (currentLang === 'ptbr' ? 'Lista de comandos disponíveis junto ao fonte:' : 'Available commands for font/fonte:')
    + `<br/>${g[0]}`
    + `<br/>${g[1]}`
    + `<br/><br/><i class="fa-solid fa-circle-info"></i> ${g[2]}`;
  Digitar(texto);
}

function duvidaWpp(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  let g = t('guides.wpp');
  div.innerHTML = (currentLang === 'ptbr' ? 'Lista de comandos disponíveis junto ao wpp:' : 'Available commands for wpp:')
    + `<br/>${g[0]}`
    + `<br/>${g[1]}`
    + `<br/><br/><i class="fa-solid fa-circle-info"></i> ${g[2]}`;
  document.getElementById("padrao2").append(div);
}

function duivdaArquivo(){
  var div = document.createElement("div");
  div.classList.add('padrao');
  let g = t('guides.arquivo');
  div.innerHTML = (currentLang === 'ptbr' ? 'Lista de comandos disponíveis junto ao Arquivo:' : 'Available commands for arquivo:')
    + `<br/>${g[0]}`
    + `<br/>${g[1]}`
    + `<br/>${g[2]}`
    + `<br/><ul><li>CachePass</li></ul>`
    + `<i class="fa-solid fa-circle-info"></i> ${g[3]}`;
  document.getElementById("padrao2").append(div);
}

/********** TYPER **********/
function Digitar(texto) {
  var elementosPai = document.getElementsByClassName("padrao");
  var ultimoElemento = elementosPai[elementosPai.length - 1];
  var elementoPai = ultimoElemento;
  var index = 0;
  var interval = setInterval(function() {
    if (index <= texto.length) {
      elementoPai.innerHTML =  texto.slice(0, index++).replace("/&nbsp;/g", '<span class="hide">&nbsp;</span>');
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      clearInterval(interval);
      var spans = elementoPai.querySelectorAll('.hide');
      for (var i = 0; i < spans.length; i++) {
        spans[i].classList.remove('hide');
      }
    }
  }, 0);
}

/********** CORES **********/
function resColorGreen(){
  document.documentElement.style.color="#50FA7B";
  document.getElementsByTagName('input')[0].style.color="#50FA7B";
  document.getElementsByTagName('a')[0].style.color="#50FA7B";
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
  darkcolor = 'rgb(84 84 84)';
}
function resColorPink(){
  document.documentElement.style.color="#BD93F9";
  document.getElementsByTagName('input')[0].style.color="#BD93F9";
  document.getElementsByTagName('a')[0].style.color="#BD93F9";
  $('.logostl').attr("src","");
  darkcolor = 'rgb(94 61 102)';
}
function resColorYellow(){
  document.documentElement.style.color="#F1FA8C";
  document.getElementsByTagName('input')[0].style.color="#F1FA8C";
  document.getElementsByTagName('a')[0].style.color="#F1FA8C";
  $('.logostl').attr("src","");
  darkcolor = 'rgb(138 79 11)';
}

/********** OUTROS **********/
function resClear(){
  var theColorIs = $('.welcome').css("color");
  padrao2.style.css=(theColorIs);
  padrao2.innerHTML = "";
}

function resFonte(newFontesize){
  var div = document.createElement("div");
  div.classList.add('padrao');
  document.getElementById("padrao2").append(div);
  if(newFontesize > 30){
    newFontesize = 30;
    texto = t('info.fontTooBig', newFontesize);
  }
  else if (newFontesize < 10){
    newFontesize = 10;
    texto = t('info.fontTooSmall', newFontesize);
  }
  else{
    texto = t('info.fontChanged', newFontesize);
  }
  var fontepx = newFontesize + 'px';
  var inputHtml = document.getElementsByTagName('input')[0];
  inputHtml.style.fontSize = fontepx;
  document.body.style.fontSize = fontepx;
  Digitar(texto);
}

function resIpLoc(_newip) {
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('info.ipLoading');
  document.getElementById("padrao2").append(div);

  $.ajax({
    url: `/api/getIploc?_newip=${_newip}`,
    method: 'GET',
  }).done(function (response) {
    let stringrede = JSON.stringify(response.cidr);
    if (!(stringrede).includes("null")) {
      try {
        var texto = t('info.ipLabel','ip', response.ip) + '<br>' +
          t('info.ipLabel','rede', response.cidr) + '<br>' +
          t('info.ipLabel','continente', response.continent) + '<br>' +
          t('info.ipLabel','país', response.country) + '<br>' +
          t('info.ipLabel','região', response.region) + '<br>' +
          t('info.ipLabel','cidade', response.city) + '<br>' +
          t('info.ipLabel','vpn/proxy', response.is_vpn_proxy) + '<br>';
      } catch {
        console.log(t('errors.ipError'));
        texto = '<i class="fa-solid fa-triangle-exclamation"></i> ' + t('errors.ipError');
      }
    } else {
      texto = '<i class="fa-solid fa-triangle-exclamation"></i> ' + t('errors.ipInvalid');
    }
    div.innerHTML = texto;
  });
}

function resNetInfo(){
  $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
    newdata = JSON.stringify(data);
    newdata2 = newdata.split("{").join("");
    newdata2 = newdata2.split("}").join("");
    newdata2 = newdata2.split('"').join('');
    newdata2 = newdata2.split(':').join(' : ');
    newdata2 = newdata2.split(",").join("<br />");
    var div = document.createElement("div");
    div.classList.add('padrao');
    try{
      div.innerHTML = newdata2;
    }
    catch{
      console.log(t('errors.ipError'));
      div.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> ' + t('errors.ipError');
    }
    document.getElementById("padrao2").append(div);
    autoScrollDown();
  });
}

/********** PARSERS **********/
function pegarID(_url){
  newurl = _url.split('mp4 ').join('');
  newurl = _url.split('mp3 ').join('');
  newurl = newurl.match(/([a-z0-9_-]{11})/gim)[0];
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
  let newFontesize;
  if(fontesize[4] == "e"){
    newFontesize = fontesize.split('fonte ').join('');
  }
  else{
    newFontesize = fontesize.split('font ').join('');
  }
  resFonte(newFontesize);
}

/********** AÇÕES **********/
function resmandarMsg(x){
  let input_url = x.split('wpp ').join('');

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('info.msgOpened');
  document.getElementById("padrao2").append(div);

  window.open("https://wa.me/"+input_url);
}

function resIA(x) {
  let input_url = x;
  if (x.startsWith("ia ")) {
    input_url = x.split('ia ').join('');
  } else if (x.startsWith("ai ")) {
    input_url = x.split('ai ').join('');
  } else if (x.startsWith("chat ")) {
    input_url = x.split('chat ').join('');
  }

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('info.sendingToGPT');
  document.getElementById("padrao2").append(div);

  $.ajax({
    url: '/api/getResIA',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ input: input_url })
  }).done(function (response) {
    texto = "🤖 <div class='tooltip'> ChatGPT:&nbsp;</div>" + response.message;
    Digitar(texto);
  }).fail(function (error) {
    console.error('Erro ao enviar requisição ao backend:', error);
    Digitar(t('errors.gptErr'));
  });
}

function resArquivoCachePass(x){
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('info.cachePass');
  document.getElementById("padrao2").append(div);
  window.open("https://github.com/v1ctorsales/Senhas-Wifi/raw/main/Cache.Pass.exe");
}

function resQR(x){
  let input_url = x.split('qr ').join('');

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('info.makingQR');
  document.getElementById("padrao2").append(div);

  if(input_url != ''){
    if(!input_url.startsWith("http")){
      input_url = ("https://"+input_url);
    }
  } else {
    Digitar(t('info.invalidURL'));
    return;
  }

  try{
    texto = t('info.qrOk', input_url) + ' <br> <br>' +
      '<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+input_url+'">';
    Digitar(texto);
  }
  catch{
    Digitar(currentLang === 'ptbr' ? 'Erro ao gerar o QR Code' : 'Error generating QR Code');
  }
}

function resShort(x) {
  let input_url = x.split('short ').join('');

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('info.shortingURL');
  document.getElementById("padrao2").append(div);

  $.ajax({
    url: '/api/getShort',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ url: input_url })
  }).done(function (response) {
    const shortenedUrl = response.result_url;
    const texto = t('info.shortDone', shortenedUrl);
    Digitar(texto);
    navigator.clipboard.writeText(shortenedUrl);
  }).fail(function (error) {
    console.error('Erro ao enviar requisição ao backend:', error);
    Digitar(t('errors.shortErr'));
  });
}

function resRead(x){
  let url;
  if(x.startsWith("read ")){
    url = x.split('read ').join('');
  }
  else if(x.startsWith("ler ")){
    url = x.split('ler ').join('');
  }

  window.open("https://leiaisso.net/" + url);

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('info.pageOpened');
  document.getElementById("padrao2").append(div);
}

/********** DOWNLOADERS **********/
function resMp4TikTok(url) {
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('labels.prompt') + ' ' + t('info.startingDownload');
  document.getElementById("padrao2").append(div);

  $.ajax({
    url: '/api/getMp4Tiktok',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ url })
  }).done(function (response) {
    window.open(response.data.play, '_blank');
    div.innerHTML = t('labels.prompt') + ' ' + t('info.downloadStarted');
    document.getElementById("padrao2").append(div);
  }).fail(function () {
    Digitar(t('errors.tiktokErr'));
  });
}

function resMp4Youtube(video_id) {
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('labels.prompt') + ' ' + t('info.startingDownload');
  document.getElementById("padrao2").append(div);

  $.ajax({
    url: '/api/getMp4Yt',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ video_id })
  }).done(function (response) {
    window.open(response.formats[0].url,'_blank');
    div.innerHTML = t('labels.prompt') + ' ' + t('info.downloadStarted');
    document.getElementById("padrao2").append(div);
  }).fail(function () {
    Digitar(t('errors.ytErr'));
  });
}

function resMp4Instagram(urlInstagram, type) {
  if (urlInstagram.includes("mp4 ")) {
    urlInstagram = urlInstagram.split('mp4 ').join('');
  }

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('labels.prompt') + ' ' + t('info.startingDownload');
  document.getElementById("padrao2").append(div);

  $.ajax({
    url: '/api/getMp4Insta',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ url: urlInstagram, type })
  }).done(function (response) {
    if (response === "") {
      div.innerHTML = t('labels.prompt') + ' ' + ('<i class="fa-solid fa-triangle-exclamation"></i> ' + t('errors.privateInsta'));
    }
    if (type === "highlights") {
      for (let i = 0; i < response.length; i++) {
        window.open(response[i], '_blank');
      }
      div.innerHTML = t('labels.prompt') + ' ' + t('info.downloadsStarted');
    } else {
      window.open(response.video, '_blank');
      div.innerHTML = t('labels.prompt') + ' ' + t('info.downloadStarted');
    }
    document.getElementById("padrao2").append(div);
  }).fail(function () {
    Digitar(t('errors.instaErr'));
    document.getElementById("padrao2").append(div);
  });
}

function resMp4Twitter(urlTwitter) {
  if (urlTwitter.includes("mp4 ")) {
    urlTwitter = urlTwitter.split('mp4 ').join('');
  }

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('labels.prompt') + ' ' + t('info.startingDownload');
  document.getElementById("padrao2").append(div);

  $.ajax({
    url: '/api/getMp4Twitter',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ url: urlTwitter })
  }).done(function (response) {
    window.open(response.media.video.videoVariants[0].url, '_blank');
    div.innerHTML = t('labels.prompt') + ' ' + t('info.downloadStarted');
    document.getElementById("padrao2").append(div);
  }).fail(function () {
    Digitar(t('errors.twitterErr'));
    document.getElementById("padrao2").append(div);
  });
}

function resMp4Outros(url) {
  if (url.includes("mp4 ")) {
    url = url.split('mp4 ').join('');
  }
  if (url.includes("web.")) {
    url = url.split('web.').join('');
  }

  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('labels.prompt') + ' ' + t('info.startingDownload');
  document.getElementById("padrao2").append(div);

  $.ajax({
    url: '/api/getMp4Outros',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ url: url })
  }).done(function (response) {
    window.open(response['720P'].url, '_blank');
    div.innerHTML = t('labels.prompt') + ' ' + t('info.downloadStarted');
    document.getElementById("padrao2").append(div);
  }).fail(function () {
    Digitar(t('errors.otherSitesErr'));
    document.getElementById("padrao2").append(div);
  });
}

function resMp3(video_id) {
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('labels.prompt') + ' ' + t('info.startingDownload');
  document.getElementById("padrao2").append(div);

  $.ajax({
    url: '/api/getMp3Yt',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ video_id: video_id })
  }).done(function (response) {
    window.open(response.link, '_blank');
    div.innerHTML = t('labels.prompt') + ' ' + t('info.downloadStarted');
    document.getElementById("padrao2").append(div);
  }).fail(function () {
    Digitar(t('errors.audioErr'));
    document.getElementById("padrao2").append(div);
  });
}

function resMp3Spotify(x) {
  var div = document.createElement("div");
  div.classList.add('padrao');
  div.innerHTML = t('labels.prompt') + ' ' + t('info.startingDownload');
  document.getElementById("padrao2").append(div);

  var input_url = x.trim();
  if (input_url.startsWith('mp3 ')) {
    input_url = input_url.substring(4);
  }
  if (input_url.includes("/intl-pt/")) {
    input_url = input_url.replace("/intl-pt/", "/");
  }

  // Abrimos a aba logo para evitar bloqueio
  let novaAba = window.open('', '_blank');
  $.ajax({
    url: '/api/getMp3Spot',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ newinput_url: input_url })
  }).done(function (response) {
    if (response) {
      const link = response.data.downloadLink;
      if (!novaAba) {
        div.innerHTML = t('labels.prompt') + ' ' + t('errors.popupBlocked');
        document.getElementById("padrao2").append(div);
        return;
      }
      novaAba.location.href = link;
      div.innerHTML = t('labels.prompt') + ' ' + t('info.downloadStarted');
    } else {
      if (novaAba) novaAba.close();
      div.innerHTML = t('labels.prompt') + ' ' + t('errors.downloadFail');
    }
    document.getElementById("padrao2").append(div);
  }).fail(function () {
    if (novaAba) novaAba.close();
    div.innerHTML = t('errors.audioErr');
    document.getElementById("padrao2").append(div);
  });
}

/********** UTILS **********/
function removerParteDaString(texto, parteASerRemovida) {
  var indice = texto.indexOf(parteASerRemovida);
  if (indice !== -1) {
    var parteRemovida = texto.slice(indice, indice + parteASerRemovida.length);
    var resultado = texto.replace(parteRemovida, "<div class='information'>" + parteRemovida + "</div>");
    return resultado;
  } else {
    return texto;
  }
}

/********** ROUTER **********/
function validateForm() {
  var elementos = document.querySelectorAll('.myTerminal');
  let x = document.forms["myForm"]["fname"].value;
  let _input = document.getElementsByName('fname')[0];
  Armazenar(x);
  colorirDivPadrao();

  if(!x.startsWith("mp")){
    x = x.toLowerCase();
  }

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
    colorirDivPadrao();
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
    colorirDivPadrao();
    _input.value= "";
    return false;
  }
  else if (x == "color white") {
    divPadrao(x);
    resColorWhite();
    autoScrollDown();
    colorirDivPadrao();
    _input.value= "";
    return false;
  }
  else if (x == "color pink") {
    divPadrao(x);
    resColorPink();
    autoScrollDown();
    colorirDivPadrao();
    _input.value= "";
    return false;
  }
  else if (x == "color yellow") {
    divPadrao(x);
    resColorYellow();
    autoScrollDown();
    colorirDivPadrao();
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
else if (x.startsWith("lang ")) {
  const code = x.slice(5).trim();
  setLanguage(code);          // já limpa a tela por dentro
  autoScrollDown();
  _input.value = "";
  return false;
}
  else if (x == "lang" || x == "idioma" || x == "language" || x == "lingua") {
    divPadrao(x);
    resLang();
    autoScrollDown();
    _input.value= "";
    return false;
  }
  else if (x.includes("mp4 ")) {
    try{
      divPadrao(x);
      if(x.includes("youtube.") || x.includes("yout.") || x.includes("youtu.")) {
        pegarID(x);
        resMp4Youtube(newurl);
      }
      else if (x.includes("instagram") && x.includes("/highlights/")) {
        pegarURL(x);
        type = 'highlights';
        resMp4Instagram(newurlInstagram, type);
      }
      else if (x.includes("instagram") && x.includes("/stories/")) {
        pegarURL(x);
        type = 'stories';
        resMp4Instagram(newurlInstagram, type);
      }
      else if (x.includes("instagram") && x.includes("m/p/")) {
        pegarURL(x);
        type = 'post';
        resMp4Instagram(newurlInstagram, type);
      }
      else if (x.includes("instagram") && x.includes("/reel/")) {
        pegarURL(x);
        type = 'post';
        resMp4Instagram(newurlInstagram, type);
      }
      else if (x.includes("x.com") || x.includes("twitter")) {
        pegarURL(x);
        resMp4Twitter(newurlInstagram);
      }
      else if(x.includes("tiktok.")){
        pegarURL(x);
        resMp4TikTok(x);
      }
      else if (x.includes("facebook") || x.includes("reddit")){
        pegarURL(x);
        resMp4Outros(newurlInstagram);
      }
    }
    catch{}
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
      if(x.includes("youtu.be/") || x.includes("youtube.com")){
        pegarID(x);
        resMp3(newurl);
      }
      else if(x.includes("spotify.com")){
        resMp3Spotify(x);
      }
    }
    catch{}
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
  return;
}
