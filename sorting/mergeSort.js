/**
 * 30/12/2021 by Cheng(ccwukong)
 * 
 * Merge sort is one of the efficient sorting algorithm that requires O(nlogn) time. It demonstrates the idea
 * of divide and conquer.
 * 
 * It's not a in-place sorting algo, and it requires addtional space to store the merged result.
 * 
 * Time complexity: O(nlogn)
 * Space complexity: O(n)
 */

const mergeSort = (arr) => {
  if(arr.length < 2){
    return arr;
  }

  // divide the input arr into 2 segments
  const mid = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

const merge = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  let res = [];
  while(p1 < arr1.length && p2 < arr2.length){
    if(arr1[p1] <= arr2[p2]){
      res.push(arr1[p1]);
      p1++;
    }else{
      res.push(arr2[p2]);
      p2++;
    }
  }

  // There might be some remaining elements in either arr1 or arr2, so lets process it here
  return res.concat(arr1.slice(p1)).concat(arr2.slice(p2));
}

module.exports = mergeSort;