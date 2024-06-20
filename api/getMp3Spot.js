const fetch = require('node-fetch'); // Para a versão 2.x do node-fetch
const FormData = require('form-data'); // Módulo para construir FormData

module.exports = async (req, res) => {
    let { newinput_url } = req.body;

    // Garantir que newinput_url seja uma string
    newinput_url = newinput_url.toString();

    // Remover tudo após o caractere '?', incluindo o próprio '?'
    if (newinput_url.includes('?')) {
        newinput_url = newinput_url.split('?')[0];
    }

    console.log('URL recebida:', newinput_url);

    const url = 'https://all-media-downloader1.p.rapidapi.com/spotifydl';
    const data = new FormData();
    data.append('url', newinput_url);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                'x-rapidapi-host': 'all-media-downloader1.p.rapidapi.com',
                ...data.getHeaders()
            },
            body: data
        });

        if (!response.ok) {
            console.log(`Erro HTTP: ${response.status} ${response.statusText}`);
            throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log('Resposta do serviço:', responseData);

        // Enviar a resposta JSON para o frontend
        res.status(200).json(responseData);
    } catch (error) {
        console.error('Erro ao fazer requisição para o serviço de conversão do Spotify:', error);
        res.status(500).json({ error: 'Houve um erro ao processar a URL do Spotify.' });
    }
};
