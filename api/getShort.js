const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url } = req.body;

  try {
    const response = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
      },
      body: new URLSearchParams({ url })
    });

    const data = await response.json();
    const shortenedUrl = data.result_url;

    res.status(200).json({ result_url: shortenedUrl });
  } catch (error) {
    console.error('Erro ao fazer requisição para o serviço de encurtamento de URL:', error);
    res.status(500).json({ error: 'Houve um erro ao encurtar a URL.' });
  }
};
