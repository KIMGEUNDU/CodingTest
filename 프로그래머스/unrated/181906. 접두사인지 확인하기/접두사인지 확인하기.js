function solution(my_string, is_prefix) {
  let arr = [];
  let result = 0;
  for (let i = 1; i <= my_string.length; i++) {
    arr.push(my_string.slice(0, i));
  }

  arr.forEach((v) => {
    v === is_prefix ? result++ : result;
  });

  return result;
}