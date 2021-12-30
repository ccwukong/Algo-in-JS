/**
 * 30/12/2021 by Cheng(ccwukong)
 * 
 * Heap sort has the time complexity of O(nlogn). To sort the input array in acending order, we need to
 * implement MaxHeap, and vice versa.
 * 
 * Time complexity: O(nlogn)
 * Space complexity: O(n)
 */

const heapSort = (arr) => {
  const h = new MaxHeap(arr);
  h.sort();
  return h.heap;
}

class MaxHeap {
  constructor(arr) {
    this.heap = arr;
    /**
     * keeping the end pointer for heap deletion, we don't actually remove any nodes from the heap array,
     * instead, we keep moving the end pointer backward when nodes are deleted.
     * 
     * whan all nodes are deleted, the entire heap array is sorted.
     */
    this.end = arr.length - 1;

    for (let i = this.end; i >= 0; i--) {
      this.heapify(i);      
    }
  }

  // Heapify takes O(logn) time to place a node to its correct position
  heapify(idx) {
    if (idx > this.end)
      return;

    let left = 2 * idx + 1;
    let right = 2 * idx + 2;
    let largest = idx;

    if (left <= this.end && this.heap[left] > this.heap[largest])
      largest = left;

    if (right <= this.end && this.heap[right] > this.heap[largest])
      largest = right;

    if (idx != largest) {
      let tmp = this.heap[idx];
      this.heap[idx] = this.heap[largest];
      this.heap[largest] = tmp;
      this.heapify(largest);
    }
  }

  add(val) {
    this.heap = this.heap.slice(0, this.end + 1).concat([val]).concat(this.heap.slice(this.end + 1));
    this.end++;

    let curr = this.end;
    while (curr > 0 && this.heap[Math.floor(curr - 1) / 2] < this.heap[curr]) {
      let tmp = this.heap[curr];
      this.heap[curr] = this.heap[Math.floor(curr - 1) / 2];
      this.heap[Math.floor(curr - 1) / 2] = tmp;
      curr = Math.floor(curr - 1) / 2;
    }
  }

  poll() {
    let tmp = this.heap[0];
    this.heap[0] = this.heap[this.end];
    this.heap[this.end] = tmp;
    this.end--;

    this.heapify(0);
  }

  sort() {
    while (this.end > 0) {
      this.poll();
    }

    return this.heap;
  }
}

module.exports = heapSort;