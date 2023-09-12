const {buscarLinha, buscarParada, posLinha, prevChegada} = require('./api');

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
    console.log(response_posicao);
}
main();