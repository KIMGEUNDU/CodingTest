// function solution(my_string) {
//   return [...my_string]
//     .map((i) => Number(i))
//     .filter((i) => i >= 0)
//     .sort((a, b) => a - b);
// }

function solution(my_string){
    return my_string.match(/\d/g).sort((a,b)=>a-b).map((i) => Number(i))
}