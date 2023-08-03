// Creates a node containing the data and a reference to the next item
class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
  }
  enqueue (value) {
    const newNode = new Node(value);

    if (this.first) {
      this.last.next = newNode;
    } else {
      // Set the node of the queue's next pointer to be the new node
      this.first = newNode;
    }

    // Make the new node the last item on the queue
    this.last = newNode;
  }
  dequeue () {
    if (this.first) {
      const dequeued = this.first;

      // Update first pointer to point to the next node of the dequeued node
      this.first = dequeued.next;

      // If the dequeued node is the last node in the queue,
      // update the last pointer to point to `null`
      if (dequeued === this.last) {
        this.last = null;
      }

      return dequeued.value;
    }
  }
}

class Stack {
  constructor () {
    this.top = null;
  }
  push (value) {
    // Create a new node,
    // add data to the new node, and
    // have the pointer point to the top
    this.top = new Node(value, this.top);
    return this;
  }
  pop () {
    /* In order to remove the top of the stack, you have to point
          the pointer to the next item. That next item becomes the
          top of the stack. */
    const popped = this.top;
    this.top = popped.next;
    return popped.value;
  }
}
