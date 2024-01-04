// class User{
//     constructor(username, email, password){
//         this.username=username;
//         this.password=password;
//         this.email=email;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     ChangeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const shivdeep=new User("shivdeep","shivdee@dep","xyz")
// console.log(shivdeep.encryptPassword());
// console.log(shivdeep.ChangeUserName());

//behind the scene

function User(username, email, password){
    this.username=username;
    this.password=password;
    this.email=email;
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}

const tea =new User("abc","abc@gmail.com", "pass@123")
console.log(tea.encryptPassword());
