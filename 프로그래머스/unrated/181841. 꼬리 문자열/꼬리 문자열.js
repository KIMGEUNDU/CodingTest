function solution(str_list, ex) {
  const result = str_list.filter((item) => !item.includes(ex));
  return result.join('')
}