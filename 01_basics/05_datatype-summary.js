//Primitive

//7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id===anotherId);


//Reference (non Primitive)
//Array, Objects, Functions
const heros=["shakktiman","naagraj"];
let myObj={
    name: "shivdeep",
    age:22,
}

const myFunction = function(){
    console.log("Hello")
}

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof null);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let a="Shivdeep"
let b=a
b="deep"
console.log(a)
console.log(b)

let userOne={
    email:"user@google.com",
    upi: "abc@ybl"
}
let userTwo=userOne
userTwo.email="shivdeep@gmail.com"
console.log(userOne);
console.log(userTwo);