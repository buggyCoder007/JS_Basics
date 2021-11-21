let x = 10;
// stack  = 20

let y = x;

// stack = y = 10

x = 20

console.log('x', x);
console.log('y', y);




let x1 = { value: 10 };

// stack x1 - 1098
// heap 1098 = { value: 20 }

let y1 = x1;

// stack = y1  = 1098

// y1 = { value: 20 };

y1.value = 20;

// console.log('x1', x1);
// console.log('y1', y1);


//

// let num = 10;

// function increase(num) {
//     num++
// }

// increase(num);
// console.log('number...', num);

// let obj = { value: 10 };

// function increaseValue(obj) {
//     obj.value++
// }

// increaseValue(obj);
// console.log('obj..', obj);