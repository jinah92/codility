function solution(N, A) {
  let result = Array.from({ length: N }, (v, i) => 0);
  let max = 0;
  let tmpMax = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] <= N) {
      result[A[i] - 1] = result[A[i] - 1] > max ? result[A[i] - 1] + 1 : max + 1;
      tmpMax = Math.max(result[A[i] - 1], tmpMax);
    } else if (A[i] == N + 1) {
      max = tmpMax;
    }
  }

  for (let i = 0; i < N; i++) {
    result[i] = result[i] < max ? max : result[i];
  }

  return result;
}

const N = 5;
const A = [3, 4, 4, 6, 1, 4, 4];
solution(N, A);
