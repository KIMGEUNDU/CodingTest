function solution(num_list) {
  let sum = 0;
  for (let key of num_list) {
    sum += key;
  }

  let mul = num_list.reduce((acc, num) => acc * num);

  if (Math.pow(sum, 2) > mul) {
    return 1;
  } else {
    return 0;
  }
}