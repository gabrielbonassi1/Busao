const axios = require('axios');
var auth_cookies = [];
function auth(token) {
    var url = 'http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=' + token;
    return axios.post(url, {})
    .then((response) => {
        if(response.headers['set-cookie']) {
            auth_cookies.push(...response.headers['set-cookie']);
        }
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error);
    });
};

function send(endpoint, data, params) {
    // Make sure the auth_cookies are available
    if (auth_cookies.length === 0) {
        console.error('Authentication cookies not available.');
        return;
    }

    var url = 'http://api.olhovivo.sptrans.com.br/v2.1' + endpoint;
    axios(url, {
        headers: {
            Cookie: auth_cookies.join('; '),
        },
        params: params,
    })
    .then((dataResponse) => {
        console.log(dataResponse.data);
        return dataResponse.data;
    })
    .catch((error) => {
        console.error(error);
    });
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
    auth: auth,
    send: send,
    wait: wait,
};