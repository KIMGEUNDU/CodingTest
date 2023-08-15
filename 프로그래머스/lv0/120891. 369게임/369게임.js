// function solution(order) {
//   return String(order)
//     .split('')
//     .filter((v) => v % 3 == 0 && v !== '0').length;
// }


2
3
4
5
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}
