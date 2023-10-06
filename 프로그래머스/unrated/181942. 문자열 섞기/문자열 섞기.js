function solution(str1, str2) {
    const answer = []
    
    for(let i = 0; i<str1.length; i++){
        answer.push(str1.substr(i,1))
        answer.push(str2.substr(i,1))
    }
    
    
    return answer.join("")
}