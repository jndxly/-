/**
 * 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，
 * 按结点数值大小顺序第三小结点的值为4。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
    // write code here
    if(!pRoot) return;
    let arr = [];
    tranverse(pRoot);
    function tranverse(r){
        if(arr.length >= k) return;
        if(r.left){
            tranverse(r.left)
        }
        arr.push(r.val);
        if(r.right){
            tranverse(r.right)
        }
    }
    return arr[k - 1]
}

