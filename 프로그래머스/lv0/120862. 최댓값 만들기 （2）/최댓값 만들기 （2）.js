function solution(numbers) {
const sortA = [...numbers].sort((a, b) => a - b);
const sortB = [...numbers].sort((a, b) => b - a);

const resultA = sortA[0] * sortA[1];
const resultB = sortB[0] * sortB[1];

    return resultA > resultB ? resultA : resultB
}