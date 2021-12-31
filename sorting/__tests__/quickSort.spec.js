const quickSort = require('../quickSort');

describe('Test quickSort', ()=>{
  it('Returns sorted arr.', ()=>{
    const arr = [8,2,1,7,5,3,4,6,1];
    quickSort(arr);    
    expect(arr).toEqual([1,1,2,3,4,5,6,7,8]);
  })
})