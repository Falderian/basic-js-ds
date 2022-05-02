const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addInside(this.rootNode, data);
    function addInside(value, data) {
        if (!value) {return new Node(data);}
        if (value.data === data) {return value;}
        if (data < value.data) {value.left = addInside(value.left, data);} 
        else {value.right = addInside(value.right, data);}
        return value;
    }
  }

  has(data, node = this.rootNode) {
    if (node === null) {return false;} 
    else if (data < node.data) {return this.has(data, node.left);} 
    else if (data > node.data) {return this.has(data, node.right);} 
    else {return true;}
  }
 
  find(data, node = this.rootNode) {
    if (node === null) {return null;} 
    else if (data < node.data) {return this.find(data, node.left);} 
    else if (data > node.data) {return this.find(data, node.right);} 
    else {return node;}
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let current = this.rootNode;
    while(current.left){current = current.left;}
    return current.data;
  }
 
  max() {
    let current = this.rootNode;
    while(current.right){current = current.right;}
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};