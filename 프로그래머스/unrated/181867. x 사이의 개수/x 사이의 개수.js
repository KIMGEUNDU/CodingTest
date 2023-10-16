function solution(myString) {
    const arr = myString.split("x")
    return arr.map((v)=> v.length)
}