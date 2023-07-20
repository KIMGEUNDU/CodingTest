function solution(myString, pat) {
    let lowerString = myString.toLowerCase()
    let lowerPat = pat.toLowerCase()
    return (lowerString.includes(lowerPat)) ? 1 : 0
}