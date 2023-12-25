// Singleton : we can create only one instance of a class and that instance can be accessed globally.
//Singleton: when we created using constructor

//object literals

const mySym= Symbol("key1")

const JsUser={
    name:"Shivdeep",
    [mySym]:"mykey1",
    age: 18,
    location: "Sangli",
    email: "shivdeep@.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])


JsUser.email="abhishek@google.com"
//Object.freeze(JsUser)   //this is used for locking
JsUser.email="abhi@google.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${JsUser.name}`);
}
console.log(JsUser.greetingTwo())