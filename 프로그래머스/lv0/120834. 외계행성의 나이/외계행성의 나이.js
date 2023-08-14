function solution(age) {
  const answer = 'abcdefghij';
  const num = Array.from(age + '');

  return num.map((v, i) => answer[v]).join('');
}