function sumChains(array, number) {
  try {
    let countResult = 0;
    let tempSum = 0;
    let addedNums = 0;
    for (let i = 0; i < array.length; i++) {
      if (!checkIfNum(array[i])) {
        throw new Error("Some values are not numbers!!!");
      } else if (array[i] < number) {
        tempSum += array[i];
        addedNums++;
        if (tempSum > number) {
          tempSum = 0;
          i = i - (addedNums - 1);
          addedNums = 0;
        } else if (tempSum === number) {
          tempSum = 0;
          addedNums = 0;
          countResult++;
        }
      }
    }
    return countResult;
  } catch (error) {
    console.log(error);
  }
}

function checkIfNum(value) {
  return typeof value === "number";
}

console.log(sumChains([1, 2, 3, 4, 5, 1], 6));
