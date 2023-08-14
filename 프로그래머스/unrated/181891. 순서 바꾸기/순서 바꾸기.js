// function solution(num_list, n) {
//   return [
//     ...num_list.filter((_, i) => i >= n),
//     ...num_list.filter((_, i) => i < n),
//   ];
// }

function solution(num_list, n) {
  num_list.unshift(...num_list.splice(n));
  return num_list;
}