/**
 * 01/01/2022 by Cheng(ccwukong)
 *
 * In this implementation, I'll implement the PriorityQueue using MinHeap,
 * means that, an item has higher prority will have smaller weight
 *
 * Heap has to be a complete binary tree
 *
 * Time complexity: build queue O(nlogn), enqueue O(logn), dequeue O(logn), peek O(1)
 * Space complexity: O(n)
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
    this.end++;

    let curr = this.end;
    while (curr > 0 && this.heap[curr] < this.heap[parseInt((curr - 1) / 2)]) {
      let tmp = this.heap[curr];
      this.heap[curr] = this.heap[parseInt((curr - 1) / 2)];
      this.heap[parseInt((curr - 1) / 2)] = tmp;

      curr = parseInt((curr - 1) / 2);
    }
  }

  dequeue() {
    let tmp = this.heap[0];
    this.heap[0] = this.heap[this.end];
    this.heap[this.end] = tmp;
    this.end--;

    this.heapify(0);

    return tmp;
  }

  peek() {
    return this.heap[0];
  }
}

module.exports = PriorityQueue;
