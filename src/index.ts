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
