class Queue{
    constructor(){
        this.front = null
        this.length = 0
    }

    enqueue = node =>{
        if(this.front===null){
            this.front = node
        }
        else{
            let cursor = this.front
            while(cursor.next!==null){
                cursor = cursor.next
            }
            cursor.next = node
        }
        this.length++
    }

    dequeue = ()=>{
        if(this.length<1){
            console.log("Queue underflow")
        }
        else{
            this.front = this.front.next
            this.length--
        }
    }

    peek = () =>{
        if(this.length<1){
            console.log("Queue Underflow")
        }
        else{
            console.log(this.front.data, ". Queue length:",this.length)
        }
    }
}

class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

const myQueue = new Queue()

myQueue.enqueue(new Node(3))
myQueue.enqueue(new Node(81))
myQueue.peek()
myQueue.dequeue()
myQueue.peek()
myQueue.dequeue()
myQueue.peek()
myQueue.dequeue()
myQueue.enqueue(new Node(1))
myQueue.peek()