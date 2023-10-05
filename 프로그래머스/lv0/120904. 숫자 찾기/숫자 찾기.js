function solution(num, k) {
return Array.from(String(num)).indexOf(String(k)) >= 0 ? Array.from(String(num)).indexOf(String(k))+1 : -1
}