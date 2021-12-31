const heapSort = require('../heapSort');

describe('Test heapSort', ()=>{
  it('Returns sorted arr.', ()=>{
    expect(heapSort([8,2,1,7,5,3,4,6,1])).toEqual([1,1,2,3,4,5,6,7,8]);
  })
})