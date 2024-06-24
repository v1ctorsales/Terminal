const fetch = require('node-fetch');
const FormData = require('form-data');
const request = require('request');

module.exports = async (req, res) => {

    function getAlbumCover(musicId) {
        return new Promise((resolve, reject) => {
            const options = {
                method: 'GET',
                url: 'https://spotify23.p.rapidapi.com/tracks/',
                qs: {
                    ids: musicId
                },
                headers: {
                    'x-rapidapi-key': '0647bc5201msh84a9358b48d00eep163485jsne7ecf062e49f',
                    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
                }
            };

            request(options, function (error, response, body) {
                if (error) {
                    reject(error);
                    return;
                }

                try {
                    // Convertendo o 'body' para um objeto JSON
                    const data = JSON.parse(body);
                    console.log('Resposta do Spotify API:', data);

                    // Verificando se 'data' possui a propriedade 'tracks'
                    if (data && data.tracks && data.tracks.length > 0 && data.tracks[0].album) {
                        // Acessando o 'url' do primeiro 'image'
                        const imageUrl = data.tracks[0].album.images[0].url;
                        console.log('URL da Capa do Álbum:', imageUrl);
                        resolve(imageUrl); // Resolvendo a promise com a URL da imagem
                    } else {
                        console.error('Estrutura JSON inválida ou sem dados de tracks ou album.');
                        reject('Estrutura JSON inválida ou sem dados de tracks ou album.');
                    }
                } catch (err) {
                    console.error('Erro ao tentar converter resposta para JSON:', err.message);
                    reject(err.message);
                }
            });
        });
    }

    let { newinput_url } = req.body;

    // Remover tudo após o caractere '?' da URL, incluindo o próprio '?'
    if (newinput_url.includes('?')) {
        newinput_url = newinput_url.split('?')[0];
    }

    // Extrair o ID da música da URL
    const musicId = newinput_url.split('/track/')[1];
    if (!musicId) {
        console.error('URL inválida do Spotify.');
        res.status(400).json({ error: 'URL inválida do Spotify.' });
        return;
    }

    console.log('Music ID:', musicId);

    // Obter a URL da capa do álbum
    let albumImageUrl;
    try {
        albumImageUrl = await getAlbumCover(musicId);
    } catch (error) {
        console.error('Erro ao obter a capa do álbum:', error);
        res.status(500).json({ error: 'Erro ao obter a capa do álbum.' });
        return;
    }

    // Construir FormData com a URL da música e da capa do álbum
    const url = 'https://all-media-downloader1.p.rapidapi.com/spotifydl';
    const data = new FormData();
    data.append('url', newinput_url);
    data.append('albumImageUrl', albumImageUrl); // Adicionando a URL da capa do álbum

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
