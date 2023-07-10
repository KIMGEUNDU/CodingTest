function solution(num_list) {
  let reverseArray = [];

  for (i = num_list.length - 1; i >= 0; i--) {
    reverseArray.push(num_list[i])
  }

  return reverseArray;
}