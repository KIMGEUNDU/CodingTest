function solution(n, k) {
  let ggocci = n * 12000;
  let drink = k * 2000;

  if ( n >= 10 ){
    drink = (k - parseInt(n/10)) * 2000
  }

  return ggocci + drink;
}