function solution(num_list) {
  let arr = num_list.filter((v) => v < 0);

  return num_list.indexOf(arr[0]);
}