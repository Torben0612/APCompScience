function sumArray(arr){
    total = 0
    for(i in arr){
        total =+ i
        i++
    }
    return total
}

console.log(sumArray([1, 3, 4, 5]))