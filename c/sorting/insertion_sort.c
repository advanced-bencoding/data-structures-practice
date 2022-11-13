#include <stdio.h>

void insertionsort(int arr[], int size){
    int i, j, k;
    
    for(i=1; i<size; i++){
        int temp = arr[i];
        j=i-1;
        
        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}

int main(){
    int arr[] = {3, 7, 9, 1, 4, 2, 6, 8, 54, 23, 10};
    int i;

    insertionsort(arr, 11);

    for(i = 0; i < 11; i++){
        printf("%d ", arr[i]);
    }
}