// 조건문

function solution(num1, num2) {
  var answer = 0;
  if (num1 == num2) {
    answer = 1;
  } else {
    answer = -1;
  }
  return answer;
}

// 물음표
function solution(num1, num2) {
  var answer = 0;
  num1 === num2 ? (answer = 1) : (answer = -1);
  return answer;
}
