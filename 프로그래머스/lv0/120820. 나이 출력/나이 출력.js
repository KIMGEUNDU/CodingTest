function solution(age) {
  const today = new Date();
  const year = today.getFullYear();
  const birthyear = year - age;

  return birthyear;
}

console.log(solution(40));