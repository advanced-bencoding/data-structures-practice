#include <stdio.h>

void selection_sort(int arr[], int n){
    int i, j, min;
    
    for(i=0; i<n; i++){
        min = 999999;
        for(j=i; j<n; j++){
            if(arr[i]<min){
                min = arr[i];
            }
        }
        printf("%d\n", arr[i]);
        arr[i] = min;
    }
}

int main(){
    int arr[] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1}, n=10, i, j, min, min_index;
    
    for(i=0; i<n; i++){
        min = arr[i];
        min_index  = i;
        for(j=i; j<n; j++){
            if(arr[j]<min){
                min = arr[j];
                min_index = j;
            }
        }
        arr[min_index] = arr[i];
        arr[i] = min;
    }
    
    for(i=0; i<n; i++){
        printf("%d ", arr[i]);
    }
}