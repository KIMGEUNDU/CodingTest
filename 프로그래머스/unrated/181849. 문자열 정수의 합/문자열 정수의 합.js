function solution(num_str) {
  let count = 0;
  [...num_str].forEach((key) => {
    count += key * 1;
  });

  return count;
}