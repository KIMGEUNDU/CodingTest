function solution(n, control) {
  let arr = control.split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "w") {
      arr[i] = 1;
    } else if (arr[i] === "s") {
      arr[i] = -1;
    } else if (arr[i] === "d") {
      arr[i] = 10;
    } else if (arr[i] === "a") {
      arr[i] = -10;
    }
  }

  for (let key of arr) {
    count += key;
  }

  return n + count;
}