class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return;
    const popedItem = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      popedItem.prev = null;
    }
    this.length--;
    return popedItem;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return;
    const shiftedItem = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      shiftedItem.next = null;
    }
    this.length--;
    return shiftedItem;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;
    if (index < this.length / 2) {
      let nextNode = this.head;
      for (let i = 0; i < index; i++) {
        nextNode = nextNode.next;
      }
      return nextNode;
    } else {
      let prevNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        prevNode = prevNode.prev;
      }
      return prevNode;
    }
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.unshift(value);
    if (index === this.length - 1) return this.push(value);
    const newNode = new Node(value);

    const after = this.get(index);
    const before = after.prev;

    before.next = newNode;
    after.prev = newNode;

    newNode.prev = before;
    newNode.next = after;

    this.length++;
    return newNode;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const targetNode = this.get(index);
    const before = targetNode.prev;
    const after = targetNode.next;

    before.next = after;
    after.prev = before;

    targetNode.prev = null;
    targetNode.next = null;

    this.length--;
    return targetNode;
  }
}

const dll = new DoublyLinkedList("A");
dll.push("B");

const popedB = dll.pop();
const popedA = dll.pop();
const popedEmpty = dll.pop();

dll.unshift("A");
dll.unshift("B");

const shiftedB = dll.shift();
const shiftedA = dll.shift();
const shiftedEmpty = dll.shift();

dll.push("A");
dll.push("B");
dll.push("C");

const getA = dll.get(0);
const getB = dll.get(1);
const getC = dll.get(2);

dll.set(-1, "Oops");
dll.set(0, "1");
dll.set(1, "2");
dll.set(2, "3");
dll.set(3, "Oops");

dll.insert(1, "Inserted");

const removedInserted = dll.remove(1, "Inserted");
const get1 = dll.get(0);
const get2 = dll.get(1);
