//첫번째 방법
// function solution(rny_string) {
//   let arr = Array.from(rny_string);
//   let result = "";
//   arr.forEach((item) => {
//     if (item === "m") {
//       result += "rn";
//     } else {
//       result += item;
//     }
//   });

//   return result;
// }

//두번째 방법
function solution(rny_string) {
  return rny_string.replace(/[m]/g, "rn");
}
