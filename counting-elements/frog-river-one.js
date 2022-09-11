function solution(X, A) {
  const result = -1;
  const set = new Set();

  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
    if (set.size === X) {
      return i;
    }
  }
  return result;
}

solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);
