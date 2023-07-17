// function solution(arr) {
//   let newArr = [];
//   for (let key of arr) {
//     if (key % 2 === 0 && key >= 50) {
//       newArr.push(key / 2);
//     } else if (key % 2 === 1 && key < 50) {
//       newArr.push(key * 2);
//     } else {
//       newArr.push(key);
//     }
//   }
//   return newArr;
// }


function solution(arr) {
  return arr.map((key) => 
    key % 2 === 0 && key >= 50
      ? key / 2
      : key % 2 === 1 && key < 50
      ? key * 2
      : key
  );
}