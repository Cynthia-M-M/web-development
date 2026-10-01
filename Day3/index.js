let variable = "Miss Cynthia"
const variable_2 = "Miss Cynthia"

// data types in JS

// string - "My name is Miss Cynthia"

// Number - 56523456725, 183, 575.2, 636

// Boolean - true or false

// Undefined - no value assigned to the variable

// Object - {
//     name:"Cynthia",
//     age:23,
//     isFemale:true,
//     job:"Software Engineer"
// }

// Array - ["Miss Cynthia", 23, true, "Software Engineer"]

// Null

//OPERATORS
// Assignment operators += -= *= /= %= **= ++ --
//Arithmetic operators  + - * / %(modulur) **(exponential)
// Comparison operators === !== == != < > <= >= 
// Logical operators && || !
//Ternary Operators ? :
//typeof operator typeof instance of
//typeof(variable)




//CONDITIONAL STATEMENTS

let bank_balance = 2000;
const fuliza_limit = 200;

const can_fuliza = (amount) => {
    if (amount > bank_balance){
        console.log()
    }
}


const can_fuliza = (amount) => {
    if (amount > bank_balance || amount > fuliza_limit){
        return "i am sorry, you can not fuliza!"
    }
    else if (amount < bank_balance || amount < fuliza_limit){
        return "you can fuliza!"
    }    
    else{
        return "you can fuliza!"
    }    
}       
console.log(`Hello miss Cynthia, ${can_fuliza(200)}`)


for(i=1; i<=5; i++){
    console.log(i)
}


const greetings = (name) => {
    console.log(`hello ${name}`)
}

greetings("miss Cynthia")

while()

start CODE

LET I = 1
IF I =1
PRINT 1  //find out what this  language is 



for (i = 1; i <= 90; i++) {
    if (i % 2 == o){
        console.log(`the numbers ${i} is even`)
    }
    else{
        console.log(`the numbers ${i} is odd`)
    }
}


let run = true;
while (run){
    for(i = 1; i<=10000; 1++) {
        if(i==90){
            console.log{i}
            run = false;
        }
    }
}

let j = 10;
while (j <= 100){
 console.log(j);
 j++;
} 

let num = 1
switch (num){
    case 1:
        console.log("one")
        break;
    case 2:
        console.log("two")
        break;
    case 3:
        console.log("three")
        break;
    case 4:
        console.log("four")
        break;
    case 5:
        console.log("five")
        break;
    default:
        console.log("number is not between 1 and 5")
        break;
}

let sum = 0
for (i = 1; i<= 100; i++){
    sum += i
}
console.log(sum)