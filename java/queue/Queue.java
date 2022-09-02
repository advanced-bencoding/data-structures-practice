class Queue {
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
            front = front.next;
        }
    }

    void display(){
        if(front==null){
            System.out.println("Queue Underflow");
        }
        else{
            Node cursor = front;
            System.out.println("Displaying Queue data:");
            while(cursor!=null){
                System.out.println(cursor.data);
                cursor = cursor.next;
            }
        }
    }

    public static void main(String[] args) {
        Queue q1 = new Queue();
        q1.append(23);
        q1.append(87);
        q1.append(97);
        q1.display();
        q1.dequeue();
        q1.display();
    }
}