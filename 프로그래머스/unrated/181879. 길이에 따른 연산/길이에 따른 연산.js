function solution(num_list) {
  let result = 0;
  if (num_list.length >= 11) {
    result = num_list.reduce((arr, cur) => arr + cur);
  } else if (num_list.length <= 10) {
    result = num_list.reduce((arr, cur) => arr * cur);
  }

  return result;
}

