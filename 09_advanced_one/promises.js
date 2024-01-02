// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async Task 2");
//         resolve()
//     },1000 )
// }).then(function(){
//     console.log("Async 2 resolved");
// })


// const promiseThree =new Promise(function(resolve,result){
//     setTimeout(function(){
//         resolve({
//             userName : "Shivdeep",
//             password : "pass"
//         })
//     },1000)
// }).then(function(user){
//     return user.userName
// }).then(function(res){
//     console.log(res);
// })

new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({
                userName : "Shivdeep",
                password : "pass"
            })
        }
        else{
            reject('Something wents wrong')
        }
    },1000)   
}).then(function(user){
    return (user.userName);
}).then(function(user){
    console.log(user);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("reolved or rejected"))


const PromiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({
                userName : "Shivdeep",
                password : "pass"
            })
        }
        else{
            reject('Something wents wrong');
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response=await PromiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data)
//     }catch(error){
//         console.log(error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(response){
    console.log(response)
})
.catch((error)=>console.log("Error"))