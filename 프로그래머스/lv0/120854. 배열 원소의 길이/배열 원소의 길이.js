function solution(strlist) {
  let arr = [];
  for (let key of strlist) {
    arr.push(key.length);
  }
  return arr;
}