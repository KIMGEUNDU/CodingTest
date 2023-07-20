//첫번째 방법
// function solution(num_list) {
//   let last = num_list.length;
//   let one = last - 1;
//   let two = last - 2;

//   for (let i = 0; i < last; i++) {
//     if (num_list[one] > num_list[two]) {
//       num_list.push(num_list[one] - num_list[two]);
//       break;
//     } else if (num_list[one] < num_list[two]) {
//       num_list.push(num_list[one] * 2);
//       break;
//     }
//   }
//   return num_list;
// }

//두번째 방법
function solution(num_list) {
  let len = num_list.length;
  let one = num_list[len - 1];
  let two = num_list[len - 2];

  if (one > two) {
    num_list.push(one - two);
  } else {
    num_list.push(one * 2);
  }

  return num_list;
}