module.exports = async (req, res) => {
    const { input } = req.body;
  
    try {
      const response = await fetch('https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'x-rapidapi-key': process.env.RAPIDAPI_KEY,
          'x-rapidapi-host': 'chatgpt-best-price.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: input }]
        })
      });
  
      const data = await response.json();
      const message = data.choices[0].message.content;
  
      res.status(200).json({ message });
    } catch (error) {
      console.error('Erro ao fazer requisição para a API do Chat GPT:', error);
      res.status(500).json({ error: 'Houve um erro ao se conectar com o Chat GPT.' });
    }
  };
  