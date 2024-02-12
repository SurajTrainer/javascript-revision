
// array practice..

// let a = [2,4,5];
// let b = [7,6,5];
// let c = [2,1,9];



// using map with simple mwthods..
let arr = [1,2,3,4,5];

let newArr = [];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element ** 2);
}
// console.log(newArr);


// now map with advacne

let newArr2 = arr.map((e) => {
    return e ** 2;
})
// console.log(newArr2);


// filter function example

const filterUse = (e) => {
    if (e < 3) {
        return true;
    }
    return false;
}

// console.log(arr.filter(filterUse));



// reduce example
// reduce work as a add types...

let arr2 = [1,2,3,4,5,6,7]

const red = (a, b) => {
    return a+b;
}

// console.log(arr2.reduce(red));


// Array from 
// to make  array by any types object

console.log(Array.from('surya'));