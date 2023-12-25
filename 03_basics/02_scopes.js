
var c=300
let a=300
if(true){
    let a=10
    const b=20
    var c=30    
    console.log("INNER: ",a);
}
 console.log(a);
// console.log(b);
console.log(c);

console.log(addone(5))
function addone(num){
    return num+1;
}

//addTwo(5)                                 //we can't access function when we declare it as below because of concept hoisting. 
const ans=function addTwo(num){
    return num+1;
}