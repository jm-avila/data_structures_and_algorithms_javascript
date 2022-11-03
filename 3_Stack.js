class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const node = new Node(value);
    this.top = node;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return;
    }

    const popedNode = this.top;
    this.top = this.top.next;
    popedNode.next = null;

    this.length -= 1;
    return popedNode;
  }
}

const stack = new Stack("A");
stack.push("B");
stack.push("C");
// Expect length === 3
// Expect top === C

const cNode = stack.pop();
const bNode = stack.pop();
const aNode = stack.pop();
const noNode = stack.pop();
// Expect length === 0
// Expect cNode === C
// Expect dNode === D
// Expect eNode === E
