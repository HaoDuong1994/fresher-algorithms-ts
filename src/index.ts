export {};
const arr = [1, 2, 3, 4];
// tìm phần tử lớn nhứt
const checkMax = (array: number[]): number => {
  let a = 0;
  array.forEach((item) => {
    if (item > a) {
      a = item;
    } else {
      a = a;
    }
  });
  return a;
};
console.log("chieu dai mang", arr.length);
const reverseArray = <T>(a: T[]): T[] => {
  let originArray: T[] = [];
  a.forEach((item, index) => {
    console.log("index", index);
    const lastIndex = a.length - index - 1;
    originArray.push(a[lastIndex]);
  });
  return originArray;
};

declare global {
  interface Array<T> {
    myReverse(): T[];
  }
}
Array.prototype.myReverse = function <T>(): T[] {
  let originArray: T[] = [];
  this.forEach((item: number, index: number) => {
    console.log("index", index);
    const lastIndex: number = this.length - index - 1;
    originArray.push(this[lastIndex]);
  });
  return originArray;
};

const secArrray = [3, 4, 5, 6];
const newArray: number[] = secArrray.myReverse();
console.log(newArray);
// 5 = 5x4x3x2x1
const myFlatoral = (a: number) => {
  let value: number;
  value = a * (a - 1);
  return value;
};

const nCount = (n: number): void => {
  if (n == 1) return console.log(1);
  console.log(n);
  nCount(n - 1);
};

nCount(5);
// sum5 = 5+4+3+2+1
const sumN = (n: number): number => {
  if (n == 1) return 1;
  return n + sumN(n - 1);
};
//f5 = f4 + f3
const value = sumN(5);
console.log(value);
const fibN = (n: number): number => {
  if (n == 1) return 1;
  if (n == 0) return 0;
  return fibN(n - 1) + fibN(n - 2);
};

//giai thừa 5 = 5*4*3

const factorialN = (n: number): number => {
  if (n == 1) return 1;
  return n * factorialN(n - 1);
};

const value1 = factorialN(5);
console.log(value1);
