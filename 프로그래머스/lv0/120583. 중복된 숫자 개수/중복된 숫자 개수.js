function solution(array, n) {
  let count = 0;

  for (let key of array) {
    if (key === n) {
      count++;
    }
  }
  return count;
}