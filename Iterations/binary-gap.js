function solution(N) {
  const binary = Array.from(N.toString(2));
  let result = [];
  let start = false;
  let count = 0;
  for (let i = 1; i < binary.length; i++) {
    if (binary[i] === '0') {
      if (binary[i - 1] === '1') {
        start = true;
      }
      if (start) {
        count += 1;
      }
    } else {
      result.push(count);
      start = false;
      count = 0;
    }
  }
  return result.length ? Math.max.apply(null, result) : 0;
}
