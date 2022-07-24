#include <stdio.h>
#include <malloc.h>

struct LinkedList{
    struct node *head;
};

struct node{
    int data;
    struct node *next;
};

void createList(){
    if(list1==NULL){
        list1 = (struct LinkedList *)malloc(sizeof(struct LinkedList));
        list1->head = NULL;
    }
    else{
        int n;
        printf("A list already exists. Do you wish to delete it?\n");
        printf("1.Yes\n");
        printf("2.No\n");
        printf("Enter corresponding integer: ");
        do{
            scanf("%d", &n);
            if(n<1 || n>2){
                printf("Invalid Input. Enter again: ");
            }
        }
        while(n<1 || n>2);
        switch (n){
            case 1:
                deleteList();
                break;
        }
    }
}

void insertionMenu(){
    if(list1==NULL){
        printf("Create a linked list before accessing other options.\n");
    }
    else{
        printf("\n***INSERTION MENU***\n");
        printf("Choose Option:\n");
    }
}

struct LinkedList *list1 = NULL;

int main(){
    printf("***SINGLY LINKED LIST GENERATOR***\n\n");
    int n;
    do{
        printf("What do you want to do? \n");
        printf("1.Create list\n");
        printf("2.Insertion Menu\n");
        printf("3.Deletion menu.\n");
        printf("4.Display list\n");
        printf("5.Exit\n");
        printf("Enter corresponding integer: ");
        scanf("%d", &n);
        switch(n){
            case 1:
                createList();
                break;
            case 2:
                insertionMenu();
                break;
            case 3:
            break;
            case 4:
            break;
        }
    }
    while(n!=5);
}