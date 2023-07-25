function solution(my_string, index_list) {
    let string = '';
    index_list.forEach((i)=>{
        string += my_string[i]
    })
    return string
}