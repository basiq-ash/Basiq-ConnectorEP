const axios = require('axios');

export default async (req, res) => {
    try {
        const response = await axios.get('https://au-api.basiq.io/public/connectors');
        const connectorsData = response.data.data;
        res.status(200).json(connectorsData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
};
