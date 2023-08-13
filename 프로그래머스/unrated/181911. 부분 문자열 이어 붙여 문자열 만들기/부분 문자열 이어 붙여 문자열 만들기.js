function solution(my_strings, parts) {
  let answer = '';

  my_strings.forEach((v, i) => {
    let [start, end] = parts[i];
    answer += v.slice(start, end + 1);
  });
  return answer;
}