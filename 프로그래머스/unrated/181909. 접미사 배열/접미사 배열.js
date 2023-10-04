function solution(my_string) {
    let answer = []
    const reverseString = [...my_string].reverse().join("")
    for(let i = 1; i<=reverseString.length; i++){
        answer.push(Array.from(reverseString.slice(0,i)).reverse().join(""))
    }
    
    return answer.sort()
}