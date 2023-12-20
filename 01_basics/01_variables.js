const accountId=144553
let accountEmail = "shivdeep@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let newAccount

// accountId =2 //not allowed because value of accountId is constant
//console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope

*/
accountEmail="shiv@gmail.com"
accountPassword="123"
accountCity="pune"
console.table([accountId,accountEmail,accountPassword,accountCity,newAccount])