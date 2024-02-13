

//   Async and Await example / practice

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.text()
        return data;
}

async function main() {
    console.log('hey this 1st number');
    console.log('hey this 2nd number');
    console.log('hey this 3rd number');

    let data = await getData();

    console.log(data);

    console.log("2323");
}

main()