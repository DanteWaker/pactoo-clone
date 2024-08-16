export function mergeSort<T>(array: T[], compareFn: (a: T, b: T) => number): T[] {
  if (array.length <= 1) {
      return array;
  }

  const middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);

  const sortedLeft = mergeSort(leftArray, compareFn);
  const sortedRight = mergeSort(rightArray, compareFn);

  return merge(sortedLeft, sortedRight, compareFn);
}

function merge<T>(leftArray: T[], rightArray: T[], compareFn: (a: T, b: T) => number): T[] {
  const resultArray: T[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (compareFn(leftArray[leftIndex], rightArray[rightIndex]) <= 0) {
          resultArray.push(leftArray[leftIndex]);
          leftIndex++;
      } else {
          resultArray.push(rightArray[rightIndex]);
          rightIndex++;
      }
  }

  return resultArray
      .concat(leftArray.slice(leftIndex))
      .concat(rightArray.slice(rightIndex));
}