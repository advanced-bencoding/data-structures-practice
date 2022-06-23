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
            let cursor = this.root;
            while(cursor!=null){
                if(cursor.data>data){
                    cursor = cursor.left
                }
                else if(cursor.data<data){
                    cursor = cursor.right
                }
                else{
                    console.log("Node with value", data, "exists")
                    return cursor
                }
            }
            if(cursor==null){
                console.log("Node with value", data, "does not exist")
            }
            return null
        }
    }

    remove(data){
        node = lookup(data)
        if(node!=null){
            findSucessor(node)
        }
        else{
            console.log("The element does not exist. no node to remove.")
        }
    }

    findSucessor(node){
        let cursor = node, prev
        while(cursor!=null){
            
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

let arr = [4,5,8,3,2,1,10,15,7]

arr.forEach((i)=>{
    bst.insert(new Node(i))
})

bst.preOrder(bst.root)

bst.lookup(100)
bst.lookup(5)