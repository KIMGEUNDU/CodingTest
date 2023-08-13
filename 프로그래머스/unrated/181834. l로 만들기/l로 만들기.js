function solution(myString) {
  return [...myString].map((i) => (i < 'l' ? (i = 'l') : i)).join('');
}