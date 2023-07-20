function solution(rny_string) {
  let arr = Array.from(rny_string);
  let result = "";
  arr.forEach((item) => {
    if (item === "m") {
      result += "rn";
    } else {
      result += item;
    }
  });

  return result;
}