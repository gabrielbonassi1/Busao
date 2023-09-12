const axios = require('axios');
var auth_cookies = [];

async function send(endpoint, data, params, api) {
    let response;
    // Make sure the auth_cookies are available
    switch(api) {
        case 1: //Olho vivo
            var url = 'http://api.olhovivo.sptrans.com.br/v2.1' + endpoint;
            let auth = await axios.post('http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=c2036cfc40b596dfedb5669c7eb9d712dd5b0e5bf1d0196a9e7786200b17c16c', {})
            .then((response) => {
                if(response.headers['set-cookie']) {
                    auth_cookies.push(...response.headers['set-cookie']);
                }
            });
            if (auth_cookies.length === 0) {
                console.error('Authentication cookies not available.');
                return;
            }
            response = await axios.get(url, {
                headers: {
                    Cookie: auth_cookies.join('; '),
                },  
                params: params,
                });
            return response;
        case 2: // Google Maps
            var url = 'https://routes.googleapis.com/directions/v2:computeRoutes'
            response = await axios.post(url, data, {
                headers: {
                    'X-Goog-Api-Key': 'AIzaSyDoIQYlADw0hd9rJPV5NKMGiW9vLqS7wKE',
                    'X-Goog-FieldMask': 'routes.distanceMeters,routes.duration',
                }
            })
            return response;
    }
};

async function wait(seconds) {
    async function delay(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    };

    const milliseconds = seconds * 1000;
    await delay(milliseconds);
};

module.exports ={
    send: send,
    wait: wait,
};