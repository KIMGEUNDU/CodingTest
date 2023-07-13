function solution(array, height) {
  let person = 0;
  for (let key of array) {
    if (key > height) {
      person++;
    }
  }
  return person;
}