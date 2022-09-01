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
        Node rt = result.root;
        for(int i = 0; i<a.length; i++){
            
        }
    }

    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}