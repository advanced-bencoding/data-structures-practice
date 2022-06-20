class Stack{
    constructor() {
        this.top = null
        this.length = 0
    }

    push = node =>{
        if(this.top!==null){
            node.prev = this.top
            this.top.next = node
        }
        this.top = node
        this.length++
    }

    pop = ()=>{
        if(this.length>0){
            this.top = this.top.prev
            this.length--
        }
        else{
            console.log("Stack Underflow")
        }
    }

    peek = ()=>{
        if(this.length>0){
            console.log(this.top.data)
        }
    }
}

class Node{
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

const myStack = new Stack()

myStack.push(new Node(30))
myStack.push(new Node(20))
myStack.push(new Node(80))
myStack.pop()
myStack.peek()
myStack.pop()
myStack.pop()