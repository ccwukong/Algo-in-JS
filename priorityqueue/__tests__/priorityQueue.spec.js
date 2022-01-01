const PriorityQueue = require('../priorityQueue');

describe('Test PriorityQueue', () => {
  it("Dequeue item according to the item's priority", () => {
    const pq = new PriorityQueue([3, 1, 5, 6, 0, 12, 9, 7, 1]);
    expect(pq.heap).toEqual([0, 1, 5, 3, 1, 12, 9, 7, 6]);
    expect(pq.dequeue()).toBe(0);
    expect(pq.dequeue()).toBe(1);
    expect(pq.dequeue()).toBe(1);
    expect(pq.dequeue()).toBe(3);
    pq.enqueue(0);
    expect(pq.heap).toEqual([0, 6, 5, 7, 9, 12, 3, 1, 1, 0]);
  });
});
