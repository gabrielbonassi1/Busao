const {send, wait} = require('./messenger');
/*auth(token)
    .then(() => {
        send('/Posicao/Linha', null, params = {
            codigoLinha: 33398
        })
    });*/

const buscarLinha = async(linha) => {
    var params = {
        termosBusca: linha
    };
    let response = await send('/Linha/Buscar', null, params);
    var out = response.data;
    return out;
}

const buscarParada = async(parada) => {
    var params = {
        termosBusca: parada
    };
    let response = await send('/Parada/Buscar', null, params);
    return response.data;
}

const posLinha = async(codigo_linha) => {
    var params = {
        codigoLinha: codigo_linha
    };
    
    let response = await send('/Posicao/Linha', null, params);
    return response.data;
}

const prevChegada = async(codigo_parada, codigo_linha) => {
    var params ={
        codigoParada: codigo_parada,
        codigoLinha: codigo_linha
    };
    let response = await send('/Previsao', null, params)
}

module.exports = {
    buscarLinha: buscarLinha,
    buscarParada: buscarParada,
    posLinha: posLinha,
    prevChegada: prevChegada,
};