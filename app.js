const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
let connectorsData = [];


async function fetchConnectors() {
  try {
    const response = await axios.get('https://au-api.basiq.io/public/connectors?filter=connector.method.eq(%27open-banking%27)');
    connectorsData = response.data.data;
  } catch (error) {
    console.error(error);
  }
}

// Fetch connectors when the server starts
fetchConnectors();

app.use(express.static('public'));

app.get('/api/connectors', (req, res) => {
  res.json(connectorsData);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
