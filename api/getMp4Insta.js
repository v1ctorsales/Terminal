const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url, type } = req.body;

  try {
    const response = await fetch(`https://instagram-media-downloader.p.rapidapi.com/rapid/${type}.php?url=${url}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
      }
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao fazer requisição para o serviço de download do Instagram:', error);
    res.status(500).json({ error: 'Houve um erro ao baixar o vídeo do Instagram.' });
  }
};
