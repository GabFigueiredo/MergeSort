// Dada uma lista Ordenada

const sortedArray = [6, 7, 8, 9, 10, 11, 14, 15, 17, 19, 22, 23, 25, 28, 30]

function binarySearch(array, target) {

    if (array.length === 1 && array[0] != target) {
        return console.log(`Não achei o target!!!`)
    }

    const middle = Math.floor(array.length / 2);
    if(array[middle] > target) {
        const left = array.slice(0, middle);
        return binarySearch(left, target) 
    }

    else if(array[middle] < target) {
        const right = array.slice(middle + 1);
        return binarySearch(right, target) 
    }
    
    else {
        return console.log(`achei o target ${array[middle]}`)
    }

}

binarySearch(sortedArray, 17); //  achei o target 17
binarySearch(sortedArray, 19); //  achei o target 19
binarySearch(sortedArray, 25); //  achei o target 25
binarySearch(sortedArray, 16); //  Não achei o target!!!
binarySearch(sortedArray, 24); //  Não achei o target!!!
