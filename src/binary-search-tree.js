const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right - null;
  }
}

class BinarySearchTree {

  root() {
    if (this.head) {
      let node = this.head;
      return node;
    } else {return null;}
  }

  add(data) {
    function add_new_data(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = add_new_data(node.left, data);
      } else {
        node.right = add_new_data(node.right, data);
      }
      return node;
    }
    this.head = add_new_data(this.head, data);
  }

  has(data) {
    return search(this.r, data);
    function search(node, data) {
      if (!node) {return false;}
      if (node.data === data) {return true;}
      return data < node.data ? search(node.left, data) : search(node.right, data);
    }
  }

  find(data) {
    return searchingElement(this.baseRoot, data);
    function searchingElement(node, data) {
      if (!node) {return null;} 
      else if (node.data === data) {return node;}
      return data < node.data ? searchingElement(node.left, data) : searchingElement(node.right, data);
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNew) {return;}
    let node = this.rootNew;
    while (node.left) {node = node.left;}
    return node.data;
  }

  max() {
    if (!this.rootNew) {return;}
    let node = this.rootNew;
    while (node.right) {node = node.right;}
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};