function solution(A) {
  let sum = 0;
  let p = [];
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    p.push(sum);
  }

  for (let i = 1; i < A.length; i++) {
    const left = p[i - 1];
    const right = p[p.length - 1] - left;
    if (i === 1) {
      result = Math.abs(left - right);
    } else {
      result = Math.min(Math.abs(left - right), result);
    }
  }
  return result;
}
