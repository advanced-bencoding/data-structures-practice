package queue;

public class Queue {
    Node front, rear;

    Queue(){
        front = null;
        rear = null;
    }

    class Node{
        int data;
        Node next;

        Node(int data){
            this.data = data;
            next = null;
        }
    }

    void append(int data){
        if(front==null){
            front = new Node(data);
            rear = front;
        }
        else{
            rear.next = new Node(data);
            rear = rear.next;
        }
    }

    void dequeue(){
        if(front==null){
            System.out.println("Queue Underflow");
        }
        else{
            Node cursor = front;
            while(cursor.next!=rear){
                cursor = cursor.next;
            }
            rear = cursor;
            rear.next = null;
        }
    }

    void display(){
        if(front==null){
            System.out.println("Queue Underflow");
        }
        else{
            Node cursor = front;
            while(cursor!=null){
                System.out.println(cursor.data);
                cursor = cursor.next;
            }
        }
    }
}