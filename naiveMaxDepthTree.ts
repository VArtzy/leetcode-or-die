/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

let count = 0
function maxDepth(root: TreeNode | null,): number {
    console.log(root?.left, root?.right)
    if (root?.left && root?.right === null) return 2
    if (root === null) {
        const tmp = count
        count = 0
        return tmp
    }

    count++
    const right = maxDepth(root.right)
    const left = maxDepth(root.left)
    return Math.max(right, left)
};
