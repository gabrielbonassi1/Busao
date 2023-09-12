const {buscarLinha, buscarParada, posLinha, prevChegada_SPTrans, prevChegada_Google} = require('./api');

/*const linha = buscarLinha(params_linha).then(function(response) {
    for (let i = 0; i < response.length; i++) {
        if (response[i].sl == 2 && response[i].tl == 10) {
            return response[i].cl;
        }
    };
});*/
async function main(){ 

    const response_linha = await buscarLinha('177H');
    let codigo_linha = 0;
    for (let i = 0; i < response_linha.length; i++) {
        if (response_linha[i].sl == 2 && response_linha[i].tl == 10) {
            codigo_linha = response_linha[i].cl;
        }
    };
    
    const response_posicao = await posLinha(codigo_linha);
    let prev_google_array = [];
    var ponto = {
        latitude: -23.554483, 
        longitude: -46.669632
    }
    var prev_google;
    for (let i=0; i < response_posicao.vs.length; i++) {
        var pos_veiculo = {
            latitude: response_posicao.vs[i].py,
            longitude: response_posicao.vs[i].px
        }
        prev_google = await prevChegada_Google(pos_veiculo, ponto);
        prev_google_array.push(prev_google);
        console.log(prev_google)
    }
}
main();