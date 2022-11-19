#include <stdio.h>

int partition(int arr[], int left, int right){
    int pivot = arr[left];
    int i = left, j = right;
    
    while(i<j){
        while(arr[i] <= pivot && i < right){
            i++;
        }
        while(arr[j] > pivot){
            j--;
        }

        if(i < j){
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    arr[left] = arr[j];
    arr[j] = pivot;
    return j;
}

void quicksort(int arr[], int left, int right){
    if(left < right){
        int p = partition(arr, left, right);
        quicksort(arr, left, p-1);
        quicksort(arr, p+1, right);
    }
}

int main(){
    int arr[] = {2, 5, 6, 11, 8, 10, 9};
    int i;

    quicksort(arr, 0, 6);

    for(i=0; i<7; i++){
        printf("%d ", arr[i]);
    }
}