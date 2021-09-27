function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(firstArray, secondArray) {
    let bigArray = []

    while(firstArray.length > 0 && secondArray.length > 0) {
        bigArray.push((firstArray[0] > secondArray[0]) ? findMinAndRemoveSorted(secondArray) : findMinAndRemoveSorted(firstArray))
    }

    return [...bigArray, ...firstArray, ...secondArray]
}

function mergeSort(array) {

    let mid = array.length / 2
    let firstHalf = array.slice(0, mid)
    let secondHalf = array.slice(mid)

    if(array.length < 2) {
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}

console.log(mergeSort([5, 2, 5, 2, 7]))