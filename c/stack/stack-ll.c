#include <stdio.h>
#include <malloc.h>

struct stack{
    int data;
    struct stack *prev;
};

struct stack *top = NULL;

void push(){
    struct stack *node = (struct stack *)malloc(sizeof(struct stack));
    printf("Enter integer data to push into stack: ");
    scanf("%d", &node->data);
    node->prev = NULL;
    if(node==NULL){
        printf("STACK OVERFLOW\n");
    }
    else{
        if(top==NULL){
            top = node;
        }
        else{
            node->prev = top;
            top = node;
        }
    }
}

int pop(){
    if(top==NULL){
        printf("STACK UNDERFLOW\n");
        return -1;
    }
    else{
        int result = top->data;
        if(top->prev==NULL){
            free(top);
            top = NULL;
        }
        else{
            struct stack *temp = top;
            top = top->prev;
            free(temp);
        }
        return result;
    }
}

void stacktrace(){
    if(top==NULL){
        printf("STACK UNDERFLOW\n");
    }
    else{
        struct stack *cursor = top;
        while(cursor!=NULL){
            printf("%d\n", cursor->data);
            cursor = cursor->prev;
        }
    }
}

int main(){
    printf("*** STACK GENERATOR ***\n\n");
    int n;
    do{
        printf("1.Push into stack\n2.Pop out from stack\n3.Display stacktrace\n4.Exit\n");
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
                    pop();
                    break;
                case 3:
                    stacktrace();
                    break;
            }
        }
    }while(n!=4);
}