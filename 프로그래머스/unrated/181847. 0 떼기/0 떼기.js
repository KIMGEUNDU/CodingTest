function solution(n_str) {
  return n_str.slice(n_str.match(/[1-9]/).index);
}