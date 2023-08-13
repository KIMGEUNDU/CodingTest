function solution(array) {
  let answer = [];
  let arr1 = [...array].sort((a, b) => b - a);
  answer.push(arr1[0], array.indexOf(arr1[0]));

  return answer;
}