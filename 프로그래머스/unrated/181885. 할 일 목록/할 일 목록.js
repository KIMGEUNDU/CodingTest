// function solution(todo_list, finished) {
//   return todo_list.filter((v, i) => (finished[i] === false ? v : ''));
// }

function solution(todo_list, finished) {
  return todo_list.filter((v, i) => !finished[i]);
}