function solution(my_string) {
  return [...my_string]
    .map((i) => Number(i))
    .filter((i) => i >= 0)
    .sort((a, b) => a - b);
}