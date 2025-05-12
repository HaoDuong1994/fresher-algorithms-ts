//Search Algorithms
// 1) Find value in Array
const findIndex = <T>(array: T[], value: T): number | undefined => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] == value);
    if (array[i] == value) return i;
  }
  return undefined;
};

const findIndexRecursive = <T>(
  array: T[],
  value: T,
  index: number = 0
): number | undefined => {
  if (index >= array.length && array[index] != value) return undefined;
  if (array[index] == value) return index;
  return findIndexRecursive(array, value, index + 1);
};

//2) find All index of value
const findAllIndex = <T>(array: T[], value: T): number[] | undefined => {
  let result: number[] = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] == value) {
      result.push(i);
    }
  }
  if (result.length == 0) return undefined;
  return result;
};

const findAllIndexRecursive = <T>(
  array: T[],
  value: T,
  index: number = 0,
  currentArray: number[] = []
): number[] | undefined => {
  if (index >= array.length && currentArray.length == 0) return undefined;
  if (index >= array.length) return currentArray;
  if (array[index] == value) {
    currentArray.push(index);
    console.log(currentArray);
    return findAllIndexRecursive(array, value, index + 1, currentArray);
  }
};

const value = findAllIndexRecursive(["banana", "banana"], "banana");

//Binary Search
const binarySearchMidElement = <T>(array: T[]) => {
  const low = 0;
  const high = array.length - 1;
  const mid = Math.floor((high - low) / 2);
  return array[mid];
};
// Bubble Sort
const countBubbleSort = (array: number[]) => {
  let n = array.length;
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      let temp;
      let swap = false;
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swap = true;
      }
      if (swap) {
        count++;
      }
    }
  }
  return count;
};
//00 01 10 11                000 001 010 011 100 101 1110 111
//Generate Binary
const generateBinary = (n: number): void => {
  const length = 1 << n;
  console.log(length);
  for (let i = 0; i < length; i++) {
    console.log("oooooooooo", i.toString(2));
    console.log(">>>>", i.toString(2).padStart(n, "0"));
  }
};
generateBinary(3);
