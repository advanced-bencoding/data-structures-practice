class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    prepend = node =>{
        if(this.head===null){
            this.head = node
            this.tail = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.length++
    }

    append = node =>{
        if(this.head===null){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }

    insert = (pos, node) =>{
        if(pos===0){
            this.prepend(data)
        }
        else if(pos===this.length){
            this.append(data)
        }
        else{
            let move = this.head, prev
            for(let i = 0; i!=pos; i++){
                prev = move
                move = move.next
            }
            node.next = prev.next
            prev.next = node
            this.length++
        }
    }

    delete = pos =>{
        if(this.head.next===null){
            this.deleteList()
        }
        else if(pos===0){
            this.head = this.head.next
        }
        else{
            let move = this.head, prev=this.head
            for(let i = 0; i!=pos; i++){
                prev = move
                move = move.next
            }
            if(pos===this.length-1){
                this.tail = prev
            }
            prev.next = move.next
        }
        this.length--
    }

    deleteList = ()=>{
        this.head = null
        this.tail = null
        console.log("The list is now empty.")
    }

    display = () =>{
        let move = this.head
        while(move!==null){
            console.log(move.data)
            move = move.next
        }
    }

    reverse = (currentNode, prevNode) =>{
        if(currentNode===null){
            this.head = prevNode
        }
        else{
            this.reverse(currentNode.next, currentNode)
            currentNode.next = prevNode
            this.tail = currentNode
        }  
    }
}

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

const list = new LinkedList()

list.append(new Node(10))
list.append(new Node(5))
list.append(new Node(16))
list.prepend(new Node(3))
list.insert(2, new Node(69))
list.delete(0)
list.reverse(list.head, null)

list.display()
console.log("length:", list.length)