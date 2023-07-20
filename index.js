function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}

console.log(solution([2, 1, 6])); //[2, 1, 6, 5]
console.log(solution([5, 2, 1, 7, 5])); //[5, 2, 1, 7, 5, 10]
