import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3';


const getPrice = async (id) => {
    const response = await axios({
        url: `${API_URL}/simple/price?ids=${id}&vs_currencies=USD`,
        method: 'GET',
    });
    return response.data[id].usd;
}

export default {
    getPrice
};
