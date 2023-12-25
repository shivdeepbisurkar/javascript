//JS array are resizable
//JS array-copy operation create shallow copies 
//shallow copy of object is a copy whose properties share the same references.
//Deep copy : don't share same reference

const myArr =[0, 1, 2, 3, 4]
const  myArr2=new Array(1,2,3,4)
console.log(myArr2)

myArr.push(6)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

//Add at beginnning in JS 
myArr.unshift(9)
console.log(myArr);

//Remove ar beginning
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr= myArr.join()
//Join also do binding
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr);

//slice, splice
/*
    Main difference between slice and splice is 
    slice doesn't modify original Array while splice modify original Array.
    
    one more difference is slice doesn't include last range element of given range while splice includes last element. 
*/

console.log("A ",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myn1);

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C ",myn2)
