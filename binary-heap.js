// Binary heaps can be represented as a Javascript Array
// If a given node is located at index 'x' in the array, its left child exists at
// index = 2x, and its right child exists at index = 2x + 1.  Each node's parent exists
// at index = x / 2 (rounded down).

// And we can find any given child's parent/children using our algorithm.  For instance,
// the "25" node exists at index = 5, therefore its parent must exist at 5/2 rounded down
// which equals 2.

class PriorityQueue {
  constructor() {
    this.heap = [null]
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    // .push() adds a new node to the end of our heap array
    this.heap.push(newNode);
    // check the child node’s priority with its parent and swap them if necessary (i.e. parent node priority is higher than child nodes priority)
    let currentNodeIdx = this.heap.length - 1;
    let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    while (
      this.heap[currentNodeParentIdx] &&
      newNode.priority > this.heap[currentNodeParentIdx].priority
    ) {
      const parent = this.heap[currentNodeParentIdx];
      this.heap[currentNodeParentIdx] = newNode;
      this.heap[currentNodeIdx] = parent;
      currentNodeIdx = currentNodeParentIdx;
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    }
  }

}
