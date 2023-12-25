function addTwo(number1,number2){
    return number1+number2;
}

const result=addTwo(3,4)
console.log(result);
//undefined work as false so we can use it inside of if 
function loginUserMessage(username){
    if(!username){
        return console.log("Please enter username");
         
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());