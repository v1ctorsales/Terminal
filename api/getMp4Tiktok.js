module.exports = async (req, res) => {
    const { url } = req.body;
    try {
        const response = await fetch(`https://tiktok-download-without-watermark.p.rapidapi.com/analysis?url=${url}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                'x-rapidapi-host': 'tiktok-download-without-watermark.p.rapidapi.com'
            }
        });

        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao fazer requisição para o serviço de download do TikTok:', error);
        res.status(500).json({ error: 'Houve um erro ao baixar o vídeo do TikTok.' });
    }
};
