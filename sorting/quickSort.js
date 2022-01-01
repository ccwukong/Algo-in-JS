/**
 * 31/12/2021 by Cheng(ccwukong)
 *
 * As MergeSort, QuickSort also demonstrates the idea of divide and conquer, the difference
 * is that QuickSort sorts elements in-place.
 *
 * Many languages' built-in sorting function implements QuickSort under the hood.
 *
 * Time complexity: O(nlogn)
 * Space complexity: O(1)
 */
const quickSort = arr => {
  /**
   * In this implementation, I'll pick the first element of arr as the initial pivot point.
   *
   * For your own implementation, you can choose mid/last/random element as the pivot point.
   */

  const swap = (arr, left, right) => {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
  };

  let left = 0;
  let right = arr.length - 1;
  const sort = (arr, left, right) => {
    /**
     * left might be larger than right for an edge case like this [8,2,1,7,5,3,4,6,1]
     * before reaching to dividing step lo already equals to hi,
     * thus when lo + 1 as the left in the next call stack, left is larger than right
     */
    if (left >= right) return arr;

    let pivot = arr[left];
    let lo = left;
    let hi = right;
    while (lo < hi) {
      // move all elements which are larger than the pivot element to the right, and the smaller ones to the left
      while (lo < hi && arr[hi] >= pivot) {
        hi--;
      }

      while (lo < hi && arr[lo] <= pivot) {
        lo++;
      }

      swap(arr, lo, hi);
    }

    swap(arr, left, lo);

    // Divide and conquer
    sort(arr, left, lo);
    sort(arr, lo + 1, right);
  };

  sort(arr, left, right);
};

module.exports = quickSort;
