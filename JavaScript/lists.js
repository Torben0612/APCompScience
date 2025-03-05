//Exercise 1
fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits);

//Exercise 2
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[2]);
numbers[1] = 25
console.log(numbers);

//Exercise 3
let colors = ["red", "green", "blue"];
colors.push("Yellow")
colors.shift()
console.log(colors);

//Exercise 4
names = ["Alice", "Bob", "Charlie"]
function printNames(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
printNames(names)

//Exercise 5: Iterating with forEach
let num = [2, 4, 6, 8, 10]
num.forEach(multiply)
function multiply(value){
    console.log(value * 2)
}
