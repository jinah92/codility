function solution(A) {
  const numbers = {};

  A.forEach((item) => {
    if (!(item in numbers)) {
      numbers[item] = 1;
    } else {
      numbers[item] += 1;
    }
  });
  return Number(Object.keys(numbers).filter((key) => numbers[key] % 2 === 1)[0]);
}
