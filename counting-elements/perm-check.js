function solution(A) {
  if (new Set(A).size !== A.length) return 0;

  const max = Math.max.apply(null, A);
  const min = Math.min.apply(null, A);
  if (A.length < max || min > 1) return 0;

  const set = new Set();
  for (let i = 0; i < max; i++) {
    set.add(A[i]);
  }
  return set.size === max ? 1 : 0;
}

const A = [1, 1];
solution(A);
