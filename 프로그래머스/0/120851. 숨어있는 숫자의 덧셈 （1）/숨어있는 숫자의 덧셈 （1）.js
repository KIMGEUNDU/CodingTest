//정규식
//function solution(my_string) {
//let num = my_string.match(/\d/g);
//let sum = 0;

//for (let key of num) {
//  sum += parseInt(key);
//}

//return sum
//}

//필터
function solution(my_string){
    let arr = my_string.split("");
    let num = arr.filter((key) => key * 1 > 0);
    let count = 0;

    num.forEach((item) => {
        count += Number(item);
    });
    
return count
}