class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append = node =>{
        if(this.head===null){
            this.head = node
        }
        else{
            this.tail.next = node
            node.prev = this.tail
        }
        this.tail = node
        this.length++
    }

    prepend = node =>{
        if(this.head===null){
            this.head = node
            this.tail = node
        }
        else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.length++
    }

    display = () =>{
        let move = this.head
        console.log("Normal Order:")
        while(move!==null){
            console.log(move.data)
            move = move.next
        }

        console.log("Reverse Order:")
        move = this.tail
        while(move!==null){
            console.log(move.data)
            move = move.prev
        }
    }

    insert = (index, node) =>{
        if(this.head===null || index===this.length){
            this.append(node)
        }
        else{
            let move = this.head
            for(let i = 0; i!=index; i++){
                move = move.next
            }
            node.next = move
            node.prev = move.prev
            move.prev.next = node
            move.prev = node
        }
    }

    delete = (index) =>{
        if(this.head.next===null){
            this.head=null
            this.tail=null
        }
        else if(index===this.length-1){
            this.tail = this.tail.prev
        }
        else{
            let move = this.head
            for(let i=0; i!=index; i++){
                move = move.next
            }
            move.prev.next = move.next
            move.next.prev = move.prev
        }
        this.length--
    }
}

class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

const doublyLinkedList = new LinkedList()

doublyLinkedList.append(new Node(5))
doublyLinkedList.append(new Node(3))
doublyLinkedList.append(new Node(7))
doublyLinkedList.prepend(new Node(9))
doublyLinkedList.insert(2, new Node(69))
doublyLinkedList.delete(1)
doublyLinkedList.display()