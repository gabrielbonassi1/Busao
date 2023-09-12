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
    let response = await send('/Linha/Buscar', null, params, 1);
    var out = response.data;
    return out;
}

const buscarParada = async(parada) => {
    var params = {
        termosBusca: parada
    };
    let response = await send('/Parada/Buscar', null, params, 1);
    return response.data;
}

const posLinha = async(codigo_linha) => {
    var params = {
        codigoLinha: codigo_linha
    };
    
    let response = await send('/Posicao/Linha', null, params, 1);
    return response.data;
}

const prevChegada_SPTrans = async(codigo_parada, codigo_linha) => {
    var params ={
        codigoParada: codigo_parada,
        codigoLinha: codigo_linha
    };
    let response = await send('/Previsao', null, params, 1)
}

const prevChegada_Google = async(pos_veiculo, pos_ponto) => {
    var location_veiculo = {
        latLng: pos_veiculo
    };
    var waypoint_veiculo = {
        via: false,
        location: location_veiculo
    };
    var location_ponto = {
        latLng: pos_ponto
    };
    var waypoint_ponto = {
        via: false,
        location: location_ponto
    };
    var request = {
        origin: waypoint_veiculo,
        destination: waypoint_ponto,
        travelMode: 'DRIVE',
        routingPreference: 'TRAFFIC_AWARE'
    }

    let response = await send(null, request, null, 2);
    return response.data.routes[0].duration;
}

module.exports = {
    buscarLinha: buscarLinha,
    buscarParada: buscarParada,
    posLinha: posLinha,
    prevChegadaSPTrans: prevChegada_SPTrans,
    prevChegada_Google: prevChegada_Google,
};