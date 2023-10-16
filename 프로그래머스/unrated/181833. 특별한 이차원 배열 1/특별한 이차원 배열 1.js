function solution(n) {
    const arr = new Array(n).fill(0).map((_, idx) => {
        return new Array(n).fill(0).map((value, i) => (idx === i ? 1 : 0));
    });
    return arr;
}