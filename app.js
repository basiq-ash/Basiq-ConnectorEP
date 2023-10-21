const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/connectors', async (req, res) => {
  try {
    const response = await axios.get('https://au-api.basiq.io/public/connectors');
    const connectors = response.data.data;
    res.json(connectors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
