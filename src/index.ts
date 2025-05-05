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
  currentArrray: number[] = []
): number[] | undefined => {
  if (index > array.length && currentArrray.length == 0) return undefined;
  if (array[index] == value) {
    currentArrray.push(index);
    return findAllIndexRecursive(array, value, index + 1, currentArrray);
  }
};
