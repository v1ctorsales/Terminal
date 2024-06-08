const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Extrair parâmetros de consulta da URL
  const _newip = event.queryStringParameters._newip;

  // Fazer a requisição à API externa
  try {
    const response = await fetch(`https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${_newip}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
      }
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};