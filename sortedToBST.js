const sortedArrayToBST = (nums) => {
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left = this.right = null;
        }
    }
    
    
    if (!nums.length) return null;
    
    let mid = Math.floor(nums.length / 2);
	const root = new TreeNode(nums[mid]);

	root.left = sortedArrayToBST(nums.slice(0, mid));
	root.right = sortedArrayToBST(nums.slice(mid + 1));

	return root;
};
console.log(sortedArrayToBST([ -10, -3, 0, 5, 9 ]));


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
