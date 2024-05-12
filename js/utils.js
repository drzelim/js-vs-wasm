export const calculate = (numThrows) => {
    let num = 0;
    const arr = new Array(numThrows);
    for (let i = 0; i < numThrows; i++) {
        if (i % 2 === 0) {
            num += i;
        } else {
            num -= i;
        }
        arr.push(num);
    }
    
    return num;
}

export const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] < arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
}

export const createAndSortArr = (arrLength) => {
    const arr = new Array(arrLength).fill(0).map((item, index) => arrLength - index);
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
}

export const getPerformance = (cb) => {
    const start = performance.now();
    cb();
    const end = performance.now();

    return end - start;
}
