module.exports = async (req, res) => {
    const { video_id } = req.body;
  
    try {
      const response = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${video_id}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
      });
  
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      console.error('Erro ao fazer requisição para o serviço de download de MP3:', error);
      res.status(500).json({ error: 'Houve um erro ao baixar o áudio.' });
    }
  };
