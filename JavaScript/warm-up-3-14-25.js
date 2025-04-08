/*

Write and test a function that takes 2 paramater: an array of names, and a name.
the function should retuen true if it contains the name, and false otherwise, use a loop
 */

function find(names, nameToFind){
    for(let index = 0; index < names.length; index++){
        if(names[index] === nameToFind){
            return true;
        }
    }
    return false;
}

console.log(find["Al", "Torry", "jayson", "Jaylen"], "Lebron")