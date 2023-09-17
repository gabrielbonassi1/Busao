const {buscarLinha, buscarParada, posLinha, prevChegada_SPTrans, prevChegada_Google} = require('./api');

async function main() {
    const response_linha = await buscarLinha('8032');
    let codigo_linha = 0;
    console.log(response_linha);
    /*for (let i = 0; i < response_linha.length; i++) {
        if (response_linha[i].sl == 2 && response_linha[i].tl == 10) {
            codigo_linha = response_linha[i].cl;
        }
    };*/
}; main();