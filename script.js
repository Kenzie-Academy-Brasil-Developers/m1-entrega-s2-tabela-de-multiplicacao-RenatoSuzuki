function tabelaMulti(array = 11){
    let tabela = []
    for (let coluna = 0; coluna < array; coluna++){
        tabela[coluna]=[]
        for(let linha = 0; linha < array; linha++){
            tabela[coluna].push([coluna]*[linha])
        }
    }
    return tabela
}
//console.table(tabelaMulti())
console.table(tabelaMulti())
// Para mudar o valor: console.table(tabelaMulti(valor))
// Exemplo: console.table(tabelaMulti(5))