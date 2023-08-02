function solution(a, b) {
    let sum = a+'' + b
    let res = b+'' + a
    return sum > res ? +sum : +res
}