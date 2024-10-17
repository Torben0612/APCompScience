function averageOfThree(num1, num2, num3){
    var sum = num1 + num2 + num3
    average = sum / 3
    return average
}

function greatestOfThree(num1, num2, num3){
    greatest = num1
    if (num2 > greatest){
        greatest = num2
    }
    if(num3 > greatest){
        greatest = num3
    }
        return greatest
}
function odds(num){
    i = 1
    oddnum = []
    while (oddnum.length < num){
        if (i % 2 != 0){
            oddnum.push(i)
            i +=1
        }
        else{
            i += 1
        }
    }
        return oddnum;
} 
console.log(odds(5));
console.log(averageOfThree(31, 34, 28));
console.log(greatestOfThree(33, 33, 28));
console.log(greatestOfThree(33, 34, 28));

