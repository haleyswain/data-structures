// initialize linked list
class PriorityQueue {
  constructor {
    // represents the highest priority item in the queue
    this.first = null;
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    // edge cases:
    // When the priority queue is empty, we set this.first to a new node with the passed in value and priority.
    // When the new node has a higher priority, we need to set its .next property to the current this.first node, and then reset this.first to be the new node.
    if (!this.first || priority > this.first.priority) {
      newNode.next = this.first;
      this.first = newNode;
    } else {
      let pointer = this.first;
      while (pointer.next && priority < pointer.next.priority) {
        pointer = pointer.next;
      }
      newNode = pointer.next;
      pointer.next = newNode;
    }
  }

  remove() {
   const first = this.first;
   this.first = this.first.next;
   return first;
 }
}
