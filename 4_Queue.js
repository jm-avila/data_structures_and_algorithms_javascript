class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const node = new Node(value);
    this.first = node;
    this.last = this.first;
    this.length = 1;
  }

  enqueue(value) {
    const enqueuedNode = new Node(value);
    if (!this.first) {
      this.first = enqueuedNode;
      this.last = this.first;
    } else {
      this.last.next = enqueuedNode;
      this.last = enqueuedNode;
    }
    this.length += 1;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return;
    }

    let dequeuedNode = this.first;
    this.first = dequeuedNode.next;
    dequeuedNode.next = null;

    if (this.length === 1) {
      this.last = null;
    }

    this.length -= 1;
    return dequeuedNode;
  }
}

const queue = new Queue("A");
queue.enqueue("B");
queue.enqueue("C");
// Expect length === 3
// Expect first === A
// Expect last === C

const aNode = queue.dequeue();
const bNode = queue.dequeue();
const cNode = queue.dequeue();
// Expect aNode === A
// Expect bNode === B
// Expect cNode === C
