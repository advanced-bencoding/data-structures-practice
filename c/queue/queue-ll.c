#include <stdio.h>
#include <malloc.h>

struct queue{
    int data;
    struct queue *next;
};

struct queue *front = NULL, *rear = NULL;

void push(){
    struct queue *node = (struct queue *)malloc(sizeof(struct queue));
    if(node==NULL){
        printf("QUEUE OVERFLOW\n");
    }
    else{
        printf("Enter integer node data to insert: ");
        scanf("%d", &node->data);
        node->next = NULL;
        if(rear==NULL){
            rear = node;
        }
        else{
            rear->next = node;
            rear = node;
        }
        if(front==NULL){
            front = node;
        }
    }
}

void rm(){
    if(front==NULL){
        printf("QUEUE UNDERFLOW\n");
    }
    else{
        struct queue *temp = front;
        front = front->next;
        free(temp);
        if(front==NULL){
            rear==NULL;
        }
    }
}

void display(){
    if(front==NULL){
        printf("QUEUE UNDERFLOW\n");
    }
    struct queue *cursor = front;
    while(cursor!=NULL){
        printf("%d\n", cursor->data);
        cursor = cursor->next;
    }
}

int main(){
    printf("*** QUEUE GENERATOR ***\n\n");
    int n;
    do{
        printf("1.Push into queue\n2.Remove from queue\n3.Display queue\n4.Exit\n");
        printf("Enter corresponding integer: ");
        scanf("%d", &n);
        if(n<1 || n>4){
            printf("Inavild option. Enter again.\n");
        }
        else{
            switch(n){
                case 1:
                    push();
                    break;
                case 2:
                    rm();
                    break;
                case 3:
                    display();
                    break;
            }
        }
    }while(n!=4);
}