function solution(numbers, direction) {
  return direction === 'right'
    ? numbers.map((_, i) =>
        i === 0 ? numbers[numbers.length - 1] : numbers[i - 1]
      )
    : numbers.map((_, i) =>
        numbers.length - 1 === i ? numbers[0] : numbers[i + 1]
      );
}