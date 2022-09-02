import java.util.Queue;
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

        Queue<Integer> pos = new LinkedList<>();
        Queue<Node> nodes = new LinkedList<>();

        pos.add(0);
        result.root = result.new Node(a[0]);
        nodes.add(result.root);
        
        while(pos.size()>0){
            int cp = pos.remove(), left = cp*2 + 1, right = cp*2 + 2; // cp: current position
            Node cursor = nodes.remove();
            if(left < a.length){
                cursor.left = result.new Node(a[left]);
                pos.add(left);
                nodes.add(cursor.left);
            }
            if(right < a.length){
                cursor.right = result.new Node(a[right]);
                pos.add(right);
                nodes.add(cursor.right);
            }
            System.out.println("Current Position: " + cp);
        }

        return result;
    }

    void dfs(Node root){
        if(root!=null){
            System.out.println(root.data);
            dfs(root.left);
            dfs(root.right);
        }
    }

    public static void main(String[] args) {
        System.out.println("Hello World");
        int[] a = new int[]{1, 4, 6, 3, 4, 6};
        BinaryTree tree = arrayToTree(a);
        System.out.println("Printing tree in pre order traversal:");
        tree.dfs(tree.root);
    }
}