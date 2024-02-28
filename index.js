function mergeSort(array) {

    if (array.length < 2) {
        return array
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const leftSorted = mergeSort(left);
    console.log(`Left ${leftSorted}`)
    const rightSorted = mergeSort(right);

    console.log(`Right ${rightSorted}`)

    return merge(leftSorted, rightSorted);

}

function merge(right, left) {
    let merged = []
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < right.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }

    merged = merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

    return merged
}

function sortMethod(array) {
    return array.sort((x,y) => x > y?1:-1)
}

console.log(sortMethod([4,2,3,1]))