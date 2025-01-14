let gather = ['a','e','i','o','u']

function solution(my_string) {
  let result = "";

  for (let key of my_string) {
    if(!gather.includes(key)) {
      result += key;
    }
  }
  return result;
}