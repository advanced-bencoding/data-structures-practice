#include <stdio.h>

int top = -1;
int stack[5];

void push(){
    if(top==4){
        printf("STACK OVERFLOW!\n");
    }
    else{
        top++;
        printf("Enter integer data to insert: ");
        scanf("%d", &stack[top]);
        printf("One element inserted.\n");
    }
}

int pop(){
    if(top==-1){
        printf("STACK UNDERFLOW!\n");
        return -1;
    }
    else{
        top--;
        return stack[top + 1];
    }
}

void stacktrace(){
    if(top==-1){
        printf("STACK UNDERFLOW!\n");
    }
    else{
        int i;
        for(i=top; i>=0; i--){
            printf("%d\n", stack[i]);
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