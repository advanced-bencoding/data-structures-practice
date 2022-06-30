const arr = [6, 5, 3, 1, 8, 7, 2, 4]

function insertionSort(arr){
    for (let i=1; i<arr.length; i++){ 
        let temp = arr[i], j
        for(j = i-1; j>=0, arr[j]>temp; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = temp
    }
    return arr
}

console.log(insertionSort(arr))