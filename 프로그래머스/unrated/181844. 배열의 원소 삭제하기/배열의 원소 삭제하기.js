function solution(arr, delete_list) {
    const same = arr.filter((v)=> delete_list.indexOf(v) > -1 ).map((v)=> arr.indexOf(v))
    same.map((v)=> delete arr[v])
    return arr.filter((v)=> v !== null)
}