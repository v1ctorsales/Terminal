const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { video_id } = req.body;

  try {
    const response = await fetch(`https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${video_id}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
      }
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao fazer requisição para o serviço de download do YouTube:', error);
    res.status(500).json({ error: 'Houve um erro ao baixar o vídeo do YouTube.' });
  }
};
