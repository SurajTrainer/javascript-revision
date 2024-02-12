// function 

function sum(a,b , c= 3) {
        return a+b+c;    
}

let result1 = sum(5);
let result2 = sum(3,7);
let result3 = sum(5,4,2);

// console.log('the sum of all value is ' + result1);
// console.log('the sum of all value is ' + result2);
// console.log('the sum of all value is ' + result3);


// arrow function

let fun1 = (x) => {
    console.log('the value of x is in arrow function ' , x);
}

fun1(67);
fun1(23);
fun1(12);