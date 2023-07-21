function solution(my_string, is_suffix) {
  let arr = [];
  for (let i = my_string.length; i >> 0; i--) {
    arr.push(my_string.slice(-i));
  }

  return arr.indexOf(is_suffix) >= 0 ? 1 : 0;
}