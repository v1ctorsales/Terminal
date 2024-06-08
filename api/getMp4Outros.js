module.exports = async (req, res) => {
  const { url } = req.body;

  try {
    
    const response = await fetch('https://all-media-downloader.p.rapidapi.com/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'all-media-downloader.p.rapidapi.com'
      },
      body: new URLSearchParams({ url: url })
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao fazer requisição para o serviço de download de outros sites:', error);
    res.status(500).json({ error: 'Houve um erro ao baixar o vídeo de outros sites.' });
  }
};
