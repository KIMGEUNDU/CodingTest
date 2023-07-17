function solution(my_string, target) {
  let count = 0;

  if (my_string.includes(target)) {
    count++;
  }

  return count;
}

console.log(solution("banana", "ana")); // 1
// console.log(solution([58, 44, 27, 10, 100],	139)); //239
