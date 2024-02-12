
//  excercise for creating business name generator ..



// function adjectives() {
//     let a = 'crazy';
//     let b = 'amazing';
//     let c = 'fire';
//     let d = Math.random()*3;
//     if (d == 0) {
//         return a;
//     }else if(d == 2 ){
//         return b;
//     } else if (d < 2) {
//         return c;
//     }
// }

// function shopname(params) {
//     let a= 'engine';
//     let b= 'food';
//     let c= 'garments';

//     let d = Math.random()*3;
//     if (d == 0) {
//         return a;
//     }else if(d == 2 ){
//         return b;
//     } else if (d < 2) {
//         return c;
//     }
// }

// function anotherWord() {
//     let a  = 'bros';
//     let b  = 'limited';
//     let c  = 'hub';

//     let d = Math.random()*3;
//     if (d == 0) {
//         return a;
//     }else if(d == 2 ){
//         return b;
//     } else if (d < 2) {
//         return c;
//     }
// }
// console.log(`Business name with adjectives :  ${adjectives()}, shopname : ${shopname()} ,  anotherWord :  ${anotherWord()}`);

// other types example..


let ran = Math.random()*3;

let first , second , third;

if (ran < 0 && ran == 0) {
    first = 'crazy';
} else if (ran > 2) {
    first = 'amazing'
}else{
    first = 'fire'
}

if (ran < 0 && ran == 0) {
    second = 'engine';
} else if (ran > 2) {
    second = 'food'
}else{
    second = 'garments'
}

if (ran < 0 && ran == 0) {
    third = 'brod';
} else if (ran > 2) {
    third = 'limited'
}else{
    third = 'hub'
}

console.log(`${first}  ${second}  ${third}`);

