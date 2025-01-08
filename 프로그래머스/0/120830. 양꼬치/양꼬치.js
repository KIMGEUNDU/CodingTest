function solution(n, k) {
    let sheep = n * 12000
    let drink = (k * 2000)-(2000 * (Math.floor(n/10)))
    
    return sheep + drink
}