#include <stdio.h>

void merge(int arr[], int left, int mid, int right){
    printf("merge called \n");
    int left_size = mid - left + 1;
    int right_size = right - mid;
    int left_arr[left_size], right_arr[right_size];

    int i, j, k;
    for(i=0; i<left_size; i++){
        left_arr[i] = arr[left + i];
    }

    for(i=0; i<right_size; i++){
        right_arr[i] = arr[mid + 1 + i];
    }

    i=0;
    j=0;
    k=left;
    while(i<left_size && j<right_size){
        if(left_arr[i] <= right_arr[j]){
            arr[k] = left_arr[i];
            i++;
        }
        else{
            arr[k] = right_arr[j];
            j++;
        }
        k++;
    }

    while(i<left_size){
        arr[k] = left_arr[i];
        i++;
        k++;
    }

    while(j<right_size){
        arr[k] = right_arr[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int left, int right){
    if(left<right){
        int mid = left + (right-left)/2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid+1, right);
        merge(arr, left, mid, right);
    }
}

int main(){
    int arr[] = {1, 4, 6, 2, 4, 6, 8, 10};

    mergeSort(arr, 0, 7);
    
    int i;
    for(i=0; i<8; i++){
        printf("%d ", arr[i]);
    }
}