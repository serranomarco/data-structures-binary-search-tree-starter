class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }
    insert(val, root = this.root) { //5

        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        }

        if (val < root.val) {
            if (!root.left) {
                root.left = new TreeNode(val);
            } else {
                this.insert(val, root.left)
            }
        } else {
            if (!root.right) {
                root.right = new TreeNode(val);
            } else {
                this.insert(val, root.right)
            }
        } 0
    }

    searchRecur(val, currentNode = this.root) {
        if (!currentNode) return false;
        if (val === currentNode.val) return true;
        if (val < currentNode.val) {
            return this.searchRecur(val, currentNode.left);
        } else {
            return this.searchRecur(val, currentNode.right);
        }

    }

    searchIter(val) {
        let currentNode = this.root;

        while (currentNode) {
            if (val === currentNode.val) return true;
            if (val < currentNode.val) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }

        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};
