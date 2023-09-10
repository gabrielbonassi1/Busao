const {auth, send, wait} = require('./messenger');
const token = 'c2036cfc40b596dfedb5669c7eb9d712dd5b0e5bf1d0196a9e7786200b17c16c';
auth(token)
    .then(() => {
        send('/Posicao/Linha', null, params)
    });

function buscarLinha(linha) {
    var params = {
        termosBusca: linha
    };
    auth(token)
    .then(() => {
        return send('/Linha/Buscar', null, params);
    });
}