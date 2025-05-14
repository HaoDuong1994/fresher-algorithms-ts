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
    return findAllIndexRecursive(array, value, index + 1, currentArray);
  }
};

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
//Generate Binary using backtracking
const generateBinary = (n: number): void => {
  const length = 1 << n;
  console.log(length);
  for (let i = 0; i < length; i++) {
    console.log(">>>>", i.toString(2).padStart(n, "0"));
  }
};

const generateBinaryRecursive = (n: number, current: string = "") => {
  if (current.length === n) {
    console.log(current);
    return;
  }
  generateBinaryRecursive(n, current + "0");
  generateBinaryRecursive(n, current + "1");
};

const binaryWithout11 = (n: number, current: string = "") => {
  if (current.length === n) {
    console.log("without 11 ", current);
    return;
  }
  const lastChar = current[current.length - 1];
  if (lastChar !== "1") {
    binaryWithout11(n, current + "1");
  }
  binaryWithout11(n, current + "0");
};

binaryWithout11(3);

//Promise
const Sleep = (second: number): Promise<string> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`sleep after ${second} second`);
    }, second * 1000);
  });
};

const doSomething = async (
  action: string,
  timeSleep: number
): Promise<void> => {
  await Sleep(timeSleep);
  console.log(action);
};
doSomething("play game", 3);

//Array Reduce Transformation
const array1 = [1, 2, 3];
const myReduce = (array: number[], initial: number): number => {
  if (array.length === 0) return initial;
  console.log("initial value >>", initial);
  for (let i = 0; i < array.length; i++) {
    initial += array[i];
  }
  return initial;
};
//Compose functionn

const fn = (arrayFn: ((x: number) => number)[]): ((x: number) => number) => {
  return (x) => {
    let initialValue: number = x;
    for (let i = arrayFn.length - 1; i >= 0; i--) {
      initialValue = arrayFn[i](initialValue);
    }
    return initialValue;
  };
};

const composeFn = fn([
  (x) => {
    return x + 1;
  },
  (x) => {
    return x * x;
  },
]);

//Fibonacci with recursive
const myFibonacci = (n: number, a = 0, b = 1, index = 0): void => {
  if (index >= n) return;
  console.log(a);
  myFibonacci(n, b, a + b, index + 1);
};
myFibonacci(10);

//Print 1 to N by Recursive

const myPrint = (n: number, index = 0, value = 1): void => {
  if (index >= n) {
    return;
  }
  console.log(value);
  myPrint(n, index + 1, value + 1);
};
myPrint(100);

const printFromNto1 = (n: number, index = n, value = index): void => {
  if (index <= 1) return;
  console.log(value);
  printFromNto1(n, index - 1, value - 1);
};
printFromNto1(30);
