/**
 * 31/12/2021 by Cheng(ccwukong)
 *
 * In this implementation, I'll implement the PriorityQueue using MinHeap,
 * means that, an item has higher prority will have smaller weight
 *
 * Time complexity:
 * Space complexity:
 */

class PriorityQueue {
  constructor(arr) {
    this.heap = arr;
    this.end = arr.length - 1;

    for (let i = this.end; i >= 0; i--) {
      this.heapify(i);
    }
  }

  heapify(idx) {
    if (idx > this.end) return;

    let left = idx * 2 + 1;
    let right = idx * 2 + 2;
    let smallest = idx;

    if (left <= this.end && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right <= this.end && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (idx !== smallest) {
      let tmp = this.heap[idx];
      this.heap[idx] = this.heap[smallest];
      this.heap[smallest] = tmp;
      this.heapify(smallest);
    }
  }

  enqueue(n) {
    this.heap = [
      ...this.heap.slice(0, this.end + 1),
      n,
      ...this.heap.slice(this.end + 1),
    ];
  }

  dequeue() {}

  peek() {}
}
