// 테스트 3번 실패
// function solution(myString) {
//     let result = '';
//     for(let i = 0; i< myString.length; i++){
//         if(myString[i] === 'a'){
//             result += myString[i].toUpperCase()
//         }else{
//             result +=  myString[i].toLowerCase()
//         }
//     }
//     return result
// }

function solution(myString){
   return myString.toLowerCase().replace(/\a/g, "A")
}