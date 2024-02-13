
// promises  


// let prom1 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         console.log('yes it is done..');
//         resolve('surya')
//     }, 3000);
// })

// prom1.then((e) =>{
//     console.log(e)
// })
// console.log('i am in last');

let a = Math.random();
let prom1 = new Promise ((resolve, reject) => {
    if (a < 0.5) {
        reject('sorry for this but you get rejected')
    }else{
        setTimeout(() => {
            console.log('yes it is done..');
            resolve('surya')
        }, 1200);
    }
})

// prom1.then((e) =>{
//     console.log(e)
// }).catch((err) => {
//     console.log(err);
// })




let prom2 =  new Promise ((resolve, reject) => {
    // let a = Math.random();
    if (a < 0.5) {
        reject('sorry for this but you get rejected 2')
    }else{
        setTimeout(() => {
            console.log('yes it is done.. 2 ');
            resolve('surya 2')
        }, 1200);
    }
})

// let p3 = Promise.all([prom1, prom2])
// let p3 = Promise.allSettled([prom1, prom2])
let p3 = Promise.race([prom1, prom2])
p3.then((a) =>{
    console.log(a)
}).catch((err) => {
    console.log(err);
})


console.log('i am in last');