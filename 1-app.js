// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0);
// setTimeout(() => {
//     console.log(3);
// }, 1000);
// setTimeout(() => {
//     console.log(4);
// }, 500);
// setTimeout(() => {
//     console.log(5);
// }, 2000);
// setTimeout(() => {
//     console.log(6);
// }, 0);

// setTimeout(() => {
//     console.log(7);
// }, 200)

// console.log(8);


function main() {
    setTimeout(() => {
        console.log(1);
    }, 10)

    setTimeout(() => {
        console.log(3);
    }, 0);
    test();
}

function test() {
    console.log(2);
}

main();