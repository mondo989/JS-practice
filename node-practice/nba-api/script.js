var axios = require("axios").default;
const https = require('https');

var options = {
  method: 'GET',
  url: 'https://rest.coinapi.io/v1/exchanges/[0]',
  headers: {
    'X-CoinAPI-Key': '009F1B53-8F15-43CE-B906-A546CC503069'
  }
};

axios.request(options)
  .then(function (response) {

    console.log(response.data);
    
    
  })
  .catch(function (error) {
	  console.error(error);
  });