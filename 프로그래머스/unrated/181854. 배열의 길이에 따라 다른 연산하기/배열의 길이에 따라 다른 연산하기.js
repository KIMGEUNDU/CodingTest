function solution(arr, n) {
  let result = [];

  if (arr.length % 2 === 0) {
    arr.forEach((v, i) => (i % 2 === 1 ? result.push(v + n) : result.push(v)));
  } else {
    arr.forEach((v, i) => (i % 2 === 0 ? result.push(v + n) : result.push(v)));
  }

  return result;
}