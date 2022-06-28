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

bst.preOrder(bst.root)

bst.lookup(100)
bst.lookup(5)
bst.remove(3)