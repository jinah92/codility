function solution(A) {
  let nextInt = 1;
  const newArr = Array.from(new Set(A));
  newArr.sort((a, b) => a - b);

  for (let i = 0; i <= newArr.length; i++) {
    if (i === newArr.length) {
      return newArr[i - 1] < 1 ? 1 : nextInt;
    } else {
      if (nextInt === newArr[i]) {
        if (newArr[i] > 0) {
          nextInt += 1;
        }
        continue;
      } else {
        if (newArr[i] > 0) {
          return nextInt;
        } else {
          continue;
        }
      }
    }
  }
}

solution([3, 2]);
