class Tree{
    constructor(){
        this.root = null
    }

    insert(node){
        if(this.root==null){
            this.root = node
        }
        else{
            let cursor = this.root, prev
            while(cursor!=null){
                prev = cursor
                if(node.data < cursor.data){
                    cursor = cursor.left
                }
                else if(node.data > cursor.data){
                    cursor = cursor.right
                }
            }
            if(node.data < prev.data){
                prev.left = node
            }
            else if(node.data > prev.data){
                prev.right = node
            }
        }
    }

    preOrder(node){
        if(node!=null){
            this.preOrder(node.left)
            this.preOrder(node.right)
            console.log(node.data)
        }
    }

    lookup(data){
        if(this.root!=null){
            let cursor = this.root, prev=null;
            while(cursor!=null){
                if(cursor.data>data){
                    prev = cursor
                    cursor = cursor.left
                }
                else if(cursor.data<data){
                    prev = cursor
                    cursor = cursor.right
                }
                else{
                    console.log("Node with value", data, "exists")
                    break
                }
            }
            if(cursor==null){
                console.log("Node with value", data, "does not exist")
            }
            return [cursor, prev]
        }
    }

    remove(data){
        let node = this.lookup(data)
        if(node[0]!=null){
            if(node[0].left==null && node[0].right==null){
                node[1].left = null
                node[1].right = null
            }
            else{
                this.preOrder(node[0])
            }
        }
    }

    breadthFirstSearch(){
        let queue = []
        let currentNode = this.root
        queue.push(currentNode)
        console.log("***BFS TRAVERSAL***")
        while(queue.length>0){
            currentNode = queue.shift()
            console.log(currentNode.data)
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
    }

    depthFirstSearch(){
        let stack = []
        let currentNode = this.root
        console.log("**** DFS Traversal ****")
        stack.push(currentNode)
        while(stack.length>0){
            currentNode = stack.pop()
            console.log(currentNode.data)
            if(currentNode.right)
                stack.push(currentNode.right)
            if(currentNode.left)
                stack.push(currentNode.left)        
        }
    }
}

class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

const bst = new Tree()

let arr = [8,7,10,3,1,2,4,-1,9,13,20,12,11]

arr.forEach((i)=>{
    bst.insert(new Node(i))
})

//bst.preOrder(bst.root)

//bst.lookup(100)
//bst.lookup(5)
bst.breadthFirstSearch()
bst.depthFirstSearch()