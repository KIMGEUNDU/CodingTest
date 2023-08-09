function solution(hp) {
  let answer = 0;

  if (hp % 5 === 0) {
    answer += Math.floor(hp / 5);
  } else if ((hp % 5) % 3 === 0) {
    answer += Math.floor(hp / 5) + (hp % 5) / 3;
  } else if (((hp % 5) % 3) % 1 === 0) {
    answer += Math.floor(hp / 5) + (hp % 5) / 3 + ((hp % 5) % 3) / 1;
  }

  return Math.floor(answer);
}