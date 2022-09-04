import java.util.Queue;
import java.util.Stack;
import java.util.LinkedList;
class BinaryTree{
    Node root;

    BinaryTree(){
        root = null;
    }

    class Node{
        int data;
        Node left;
        Node right;

        Node(int data){
            this.data = data;
            left = null;
            right = null;
        }
    }

    static BinaryTree arrayToTree(int[] a){
        BinaryTree result = new BinaryTree();

        Queue<Integer> pos = new LinkedList<>(); //to track next array element to be inserted into tree
        Queue<Node> nodes = new LinkedList<>(); //to track current cursor position for insertion

        pos.add(0);
        result.root = result.new Node(a[0]);
        nodes.add(result.root);
        
        while(pos.size()>0){ //While queue is not empty
            int cp = pos.remove(), left = cp*2 + 1, right = cp*2 + 2; // cp: current position
            Node cursor = nodes.remove();
            if(left < a.length && a[left]!=-1){
                cursor.left = result.new Node(a[left]);
                pos.add(left);
                nodes.add(cursor.left);
            }
            if(right < a.length && a[right]!=-1){
                cursor.right = result.new Node(a[right]);
                pos.add(right);
                nodes.add(cursor.right);
            }
        }

        return result;
    }

    void recursivePreOrder(Node root){
        if(root!=null){
            System.out.println(root.data);
            recursivePreOrder(root.left);
            recursivePreOrder(root.right);
        }
    }

    void recursivePostOrder(Node root){
        if(root!=null){
            recursivePostOrder(root.left);
            recursivePostOrder(root.right);
            System.out.println(root.data);
        }
    }

    void recursiveInOrder(Node root){
        if(root!=null){
            recursiveInOrder(root.left);
            System.out.println(root.data);
            recursiveInOrder(root.right);
        }
    }

    void iterativePreOrder(){
        Node cursor = root;
        Stack<Node> s = new Stack<>();
        s.push(root);

        System.out.println("Printing tree in iterative pre order:");
        while(s.size()>0){
            cursor = s.pop();
            System.out.println(cursor.data);
            if(cursor.right!=null){
                s.push(cursor.right);
            }
            if(cursor.left!=null){
                s.push(cursor.left);
            }
        }
    }

    void iterativePostOrder(){
        Node cursor = root;
        Stack<Node> s = new Stack<>();
        Stack<Node> reverse = new Stack<>();
        s.push(root);

        while(s.size()>0){
            cursor = s.pop();
            reverse.push(cursor);
            
            if(cursor.left!=null){
                s.push(cursor.left);
            }

            if(cursor.right!=null){
                s.push(cursor.right);
                
            }
            
        }

        System.out.println("Printing tree in iterative post order:");
        while(reverse.size()>0){
            System.out.println(reverse.pop().data);
        }
    }

    void iterativeInOrder(){
        Stack<Node> s = new Stack<>();
        Node cursor = root;
        
        System.out.println("Printing tree in iterative in order:");
        while(cursor!=null || s.size()>0){
            while(cursor!=null){
                s.push(cursor);
                cursor = cursor.left;
            }

            cursor = s.pop();
            System.out.println(cursor.data);
            cursor = cursor.right;
        }

    }

    public static void main(String[] args) {
        //Array Representation of binary tree: the left child of kth element is 2k + 1, the right child is 2k + 2, -1 denotes null entry
        int[] a = new int[]{1, 2, 3, 4, 5, 6, 7, -1, -1, 8, -1, -1, -1, 9, 10};
        /*
                                    1

                        2                       3

                    4       5               6       7
                    
                          8                       9   10
         */
        BinaryTree tree = arrayToTree(a);
        System.out.println("Printing tree in recursive pre order traversal:");
        tree.recursivePreOrder(tree.root);
        tree.iterativePreOrder();
        System.out.println("Printing tree in recursive post order traversal:");
        tree.recursivePostOrder(tree.root);
        tree.iterativePostOrder();
        System.out.println("Printing tree in recursive in order traversal:");
        tree.recursiveInOrder(tree.root);
        tree.iterativeInOrder();
    }
}