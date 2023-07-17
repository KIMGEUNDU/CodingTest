function solution(numbers, n) {
  var answer = 0;
  for (let value of numbers) {
    answer += value;
    if (answer > n) {
      break;
    }
  }
  return answer;
}