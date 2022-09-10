function solution(A, K) {
  if (!A.length) return [];
  let i = 0;
  while (i < K) {
    const data = A.pop();
    A.unshift(data);
    i++;
  }
  return A;
}
