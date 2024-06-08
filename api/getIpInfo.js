module.exports = async (req, res) => {
  const { _newip } = req.query;

  try {
    // Fazer a requisição à API externa usando import()
    const { default: fetch } = await import('node-fetch');
    
    const response = await fetch(`https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${_newip}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
      }
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
