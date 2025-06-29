const fetch = require('node-fetch');

module.exports = async (req, res) => {
    let { newinput_url } = req.body;

    // Remover tudo após o caractere '?' da URL
    if (newinput_url.includes('?')) {
        newinput_url = newinput_url.split('?')[0];
    }

    // Validar a URL
    if (!newinput_url.includes('/track/')) {
        console.error('URL inválida do Spotify.');
        return res.status(400).json({ error: 'URL inválida do Spotify.' });
    }

    // Codificar a URL para usá-la como parâmetro da nova API
    const encodedSpotifyUrl = encodeURIComponent(newinput_url);

    // Nova URL da API
    const apiUrl = `https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=${encodedSpotifyUrl}`;

    // Fazer requisição GET para a nova API
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '0647bc5201msh84a9358b48d00eep163485jsne7ecf062e49f',
                'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            console.error(`Erro HTTP: ${response.status} ${response.statusText}`);
            return res.status(500).json({ error: 'Erro ao comunicar com a API de download.' });
        }

        // A resposta pode ser JSON ou texto. Tente as duas:
        let result;
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            result = await response.json();
        } else {
            result = await response.text();
        }

        console.log('Resposta da nova API:', result);
        res.status(200).json({ data: result.data });
    } catch (error) {
        console.error('Erro ao fazer requisição para a nova API:', error);
        res.status(500).json({ error: 'Erro ao processar a URL do Spotify.' });
    }
};
