module.exports = async (req, res) => {
    const { url, type } = req.body;

    console.log("back", url);

    try {
        // Defina a URL base e ajuste com base no tipo
        let apiUrl;
        if (type === 'stories') {
            apiUrl = `https://instagram-media-downloader.p.rapidapi.com/rapid/stories.php?url=${url}`;
        } else if (type === 'highlights') {
            apiUrl = `https://instagram-media-downloader.p.rapidapi.com/rapid/highlights.php?url=${url}`;
        } else {
            return res.status(400).json({ error: 'Tipo inválido fornecido.' });
        }

        const response = await fetch(apiUrl, {
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