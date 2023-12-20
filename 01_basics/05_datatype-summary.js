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

