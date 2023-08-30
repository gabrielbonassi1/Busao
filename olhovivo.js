const axios = require('axios');

var token = 'c2036cfc40b596dfedb5669c7eb9d712dd5b0e5bf1d0196a9e7786200b17c16c'
axios({
    method: 'post',
    url: 'http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=c2036cfc40b596dfedb5669c7eb9d712dd5b0e5bf1d0196a9e7786200b17c16c'
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => console.error(error));