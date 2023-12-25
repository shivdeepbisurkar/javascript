const tinderuser=new Object();

tinderuser.id="123"
tinderuser.name="Shivdeep"
console.log(tinderuser);

const newUser={
    id:"123",
    name:{
        username:{
            firtname:"Shivdeep",
            lastname:"Bisurkar"
        }
    }
}
// console.log(newUser.name.username.firtname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
// console.log(obj3);

// //const obj3 = Object.assign({},obj1,obj2)
// const obj3={...obj1, ...obj2}
// console.log(obj3);


// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLogged'));

const course={
    coursename:"JS",
    price:"100",
    name: "shivdeep"
}

const {coursename:cour}=course
console.log(cour);

