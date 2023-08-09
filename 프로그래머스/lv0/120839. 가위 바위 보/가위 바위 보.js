function solution(rsp) {
  const map = [...rsp].map((item) =>
    item === '2' ? (item = '0') : item === '0' ? (item = '5') : (item = '2')
  );
  return map.join('');
}