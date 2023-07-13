function solution(my_string, n) {
  let num = "";
  for (let key of my_string) {
    num += key.repeat(n);
  }
  return num;
}