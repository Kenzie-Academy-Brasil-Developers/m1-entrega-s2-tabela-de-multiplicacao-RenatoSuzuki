function table(){
let array = []
for (let i = 0; i <= 10; i++){
    array[i]=[]
    for(let j = 0; j <= 10; j++){
        array[i].push([i]*[j])
    }
  }
  return array
}
console.table(table())

//bonus

function tabelaMulti(array = 11){
    let tabela = []
    for (let i = 0; i < array; i++){
        tabela[i]=[]
        for(let j = 0; j < array; j++){
            tabela[i].push([i]*[j])
        }
    }
    return tabela
}
console.table(tabelaMulti())