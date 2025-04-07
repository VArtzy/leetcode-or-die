/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // If subtree is null, it's always a subtree (empty tree is subtree of any tree)
    if (subRoot === null) return true;
    
    // If main tree is null but subtree isn't, it's not a subtree
    if (root === null) return false;
    
    // Check if trees are identical starting from current node
    if (isSameTree(root, subRoot)) return true;
    
    // Otherwise check left or right subtrees
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

/**
 * Helper function to check if two trees are identical
 * @param {TreeNode} p 
 * @param {TreeNode} q 
 * @returns {boolean}
 */
function isSameTree(p, q) {
    // Both null - identical
    if (p === null && q === null) return true;
    
    // One null, one not - not identical
    if (p === null || q === null) return false;
    
    // Values don't match - not identical
    if (p.val !== q.val) return false;
    
    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
