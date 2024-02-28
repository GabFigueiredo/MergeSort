function testarOrdemAlfabetica(nome1, nome2) {
    return nome1.toLowerCase() < nome2.toLowerCase();
}

const nomesPorLetra = [
    "Alice", "Bernardo", "Clara", "Davi", "Eduarda", "Felipe",
    "Gabriela", "Heitor","Isabela", "João", "Laura", "Miguel", 
    "Natália", "Otávio", "Pérola", "Rafael", "Sophia", "Theo",
    "Valentina", "William", "Xavier", "Yasmin", "Zacarias"
];


function binaryNames(array, target) {

    if (array.length === 1 && array[0] != target) {
        return console.log(`Não achei o target!!!`)
    }

    const middle = Math.floor(array.length / 2);
    if(array[middle] > target) {
        const left = array.slice(0, middle);
        return binaryNames(left, target) 
    }

    else if(array[middle] < target) {
        const right = array.slice(middle + 1);
        return binaryNames(right, target) 
    }
    
    else {
        return console.log(`achei o target ${array[middle]}`)
    }

}

binaryNames(nomesPorLetra, "Pedro")