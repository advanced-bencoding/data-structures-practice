const arr = [6, 5, 3, 1, 8, 7, 2, 4]

function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for(j=1; j<arr.length-i; j++){
            if(arr[j-1]>arr[j]){
                let temp = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))