module.exports = async (req, res) => {
    let { url } = req.body;
    console.log(url);
  
    try {
        // Verificar se a URL começa com 'http://' ou 'https://'
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            // Se não começar com 'http://' ou 'https://', adicionar 'http://'
            url = 'http://' + url;
        }

        const response = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
            },
            body: JSON.stringify({ url: url }) // Corrigindo a passagem da URL como JSON no corpo da requisição
        });

        const data = await response.json();
        console.log(data);
        const shortenedUrl = data.result_url; // Corrigindo a obtenção da URL encurtada
  
        res.status(200).json({ result_url: shortenedUrl });
    } catch (error) {
        console.error('Erro ao fazer requisição para o serviço de encurtamento de URL:', error);
        res.status(500).json({ error: 'Houve um erro ao encurtar a URL.' });
    }
};
