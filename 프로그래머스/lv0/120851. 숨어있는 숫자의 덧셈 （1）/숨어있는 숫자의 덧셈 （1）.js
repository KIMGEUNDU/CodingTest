function solution(my_string) {
let num = my_string.match(/\d/g);
let sum = 0;

for (let key of num) {
  sum += parseInt(key);
}

return sum
}