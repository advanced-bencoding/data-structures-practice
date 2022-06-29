const arr = [6, 5, 3, 1, 8, 7, 2, 4]

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let min = i
        for(let j=i; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    
    return arr
}

console.log(selectionSort(arr))