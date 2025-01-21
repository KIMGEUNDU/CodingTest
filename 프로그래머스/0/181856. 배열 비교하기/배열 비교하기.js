function solution(arr1, arr2) {
  let answer = 0;
  let sum1 = 0;
  let sum2 = 0;
  arr1.forEach((i) => (sum1 += i));
  arr2.forEach((i) => (sum2 += i));

  if (arr1.length > arr2.length) {
    answer = 1;
  } else if (arr1.length === arr2.length) {
    if (sum1 > sum2) {
      answer = 1;
    } else if (sum1 < sum2) {
      answer = -1;
    } else {
      answer = 0;
    }
  } else {
    answer = -1;
  }
  return answer;
}