function solution(arr) {
  let arr1 = [];
  arr.forEach((item) => {
    for (let i = 0; i < item; i++) {
      arr1.push(item);
    }
  });
  return arr1;
}