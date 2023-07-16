function solution(num_list, n) {
  let count = 0;
  if (num_list.includes(n) === true) {
    count++;
  }

  return count;
}