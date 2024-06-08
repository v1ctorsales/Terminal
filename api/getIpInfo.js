// api/getIpInfo.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Extrair parâmetros de consulta da URL
  const { _newip } = req.query;

  try {
    // Fazer a requisição à API externa
    const response = await fetch(`https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${_newip}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
      }
    });

    const data = await response.json();

    // Responder com os dados obtidos
    res.status(200).json(data);
  } catch (error) {
    // Responder com um erro se algo der errado
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
