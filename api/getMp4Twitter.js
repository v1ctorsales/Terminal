const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url } = req.body;

  try {
    const response = await fetch(`https://twitter-downloader-download-twitter-videos-gifs-and-images.p.rapidapi.com/status?url=${url}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'twitter-downloader-download-twitter-videos-gifs-and-images.p.rapidapi.com'
      }
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao fazer requisição para o serviço de download do Twitter:', error);
    res.status(500).json({ error: 'Houve um erro ao baixar o vídeo do Twitter.' });
  }
};
