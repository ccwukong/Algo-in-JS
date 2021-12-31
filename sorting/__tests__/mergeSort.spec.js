const mergeSort = require('../mergeSort');

describe('Test mergeSort', ()=>{
  it('Returns sorted arr.', ()=>{
    expect(mergeSort([8,2,1,7,5,3,4,6,1])).toEqual([1,1,2,3,4,5,6,7,8]);
  })
})