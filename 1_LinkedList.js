class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    // No items
    if (this.length === 0) {
      return;
    }
    // One Item
    const popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
      this.length = 0;
      return popedNode;
    }
    // Many Items
    let pre = this.head;
    let next = pre;
    while (next.next) {
      pre = next;
      next = next.next;
    }
    pre.next = null;
    this.tail = pre;
    this.length -= 1;
    return popedNode;
  }

  unshift(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;
    return this;
  }

  shift() {
    if (this.length === 0) {
      return;
    }

    let shiftedNode = this.head;
    this.head = shiftedNode.next;
    shiftedNode.next = null;

    if (this.length === 1) {
      this.tail = null;
    }

    this.length -= 1;
    return shiftedNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return;
    }
    let currentIndex = 0;
    let node = this.head;
    while (currentIndex < index) {
      node = node.next;
      currentIndex += 1;
    }
    return node;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
    }
    return node;
  }

  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const node = new Node(value);
    const prevNode = this.get(index - 1);
    if (prevNode) {
      node.next = prevNode.next;
      prevNode.next = node;
      this.length += 1;
    }

    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    removedNode.next = null;
    this.length -= 1;
    return removedNode;
  }

  reverse() {
    if (this.length === 0) {
      return;
    }
    if (this.length === 1) {
      return this;
    }
    let nextNode = this.head;
    let newHead = null;
    for (let i = 0; i < this.length; i++) {
      const currentNode = nextNode;
      nextNode = nextNode.next;
      currentNode.next = newHead;
      newHead = currentNode;
    }
    this.head = newHead;
    return this;
  }
}

const ll = new LinkedList("A");
ll.push("B");
ll.push("C");
// Expect length === 3
// Expect head === A
// Expect Tail === C

const cNode = ll.pop();
const bNode = ll.pop();
const aNode = ll.pop();
const noNode = ll.pop();
// Expect length === 0
// Expect cNode === C
// Expect dNode === D
// Expect eNode === E

ll.unshift("D");
ll.unshift("E");
ll.unshift("F");
// Expect length === 3
// Expect head === F
// Expect Tail === D

const fNode = ll.shift();
const eNode = ll.shift();
const dNode = ll.shift();
// Expect length === 0
// Expect fNode === F
// Expect eNode === E
// Expect dNode === D

ll.push("G");
ll.push("H");
ll.push("L");

const gNode = ll.get(0);
const hNode = ll.get(1);
const lNode = ll.get(2);
// Expect gNode === G
// Expect hNode === H
// Expect lNode === L

const mNode = ll.set(1, "M");
// Expect mNode === M
// Expect hNode === M

const nNode = ll.insert(1, "N");
const firstNode = ll.get(0);
const secondNode = ll.get(1);
// Expect firstNode.next === N
// Expect secondNode === N

const oNode = ll.insert(4, "O");
// Expect oNode === O
// Expect oNode.next === null

const removedMNode = ll.remove(2);
// Expect removedMNode === M
// Expect removedMNode.next === null

const originalHead = ll.head
const originalTail = ll.tail
ll.reverse();
const reversedHead = ll.head
const reversedTail = ll.tail
// Expect originalHead === reversedTail
// Expect originalTail === reversedHead