function solution(myString, pat) {
  let arr = Array.from(myString);

  let result = arr.map((v) => {
    if (v === "A") {
      return "B";
    } else if (v === "B") {
      return "A";
    }
    return v;
  });

  return result.join("").includes(pat) ? 1 : 0;
}