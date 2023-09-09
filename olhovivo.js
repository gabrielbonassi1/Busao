const axios = require('axios');
const url = require('url');

const url_sptrans = 'http://api.olhovivo.sptrans.com.br/v2.1'

axios.post('http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=c2036cfc40b596dfedb5669c7eb9d712dd5b0e5bf1d0196a9e7786200b17c16c');

let params = {
    termosBusca: '177H'
}
axios.get(url_sptrans + '/Linha/Buscar?termosBusca=177H',{withCredentials: true});