function solution(my_string, target) {
  let count = 0;

  if (my_string.includes(target)) {
    count++;
  }

  return count;
}