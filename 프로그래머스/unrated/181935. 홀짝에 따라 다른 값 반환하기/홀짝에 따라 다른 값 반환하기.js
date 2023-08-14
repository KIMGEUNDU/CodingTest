function solution(n) {
  let sum = 0;
  let square = 0;

  for (let i = 1; i <= n; i++) {
    i % 2 === 1 ? (sum += i) : (square += i ** 2);
  }

  return n % 2 === 1 ? sum : square;
}