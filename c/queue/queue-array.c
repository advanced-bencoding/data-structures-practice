#include <stdio.h>

int queue[5];
int front = -1, rear = -1;

void push(){
    if(rear==4){
        printf("QUEUE OVERFLOW\n");
    }
    else{
        rear++;
        printf("Enter integer data to insert: ");
        scanf("%d", &queue[rear]);
        if(front==-1){
            front++;
        }
    }
}

int rm(){
    if(front==-1){
        printf("QUEUE UNDERFLOW\n");
        return -1;
    }
    else{
        int result = queue[front];
        front++;
        if(front>rear){
            front = -1;
            rear = -1;
        }
        return result;
    }
}

void display(){
    if(front==-1){
        printf("QUEUE UNDERFLOW\n");
    }
    else{
        int i;
        for(i=front; i<=rear; i++){
            printf("%d\n", queue[i]);
        }
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