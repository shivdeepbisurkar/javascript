const cart=["shoes","pants"]
createOrder(cart)
.then((orderId)=>{
    console.log(orderId);
    return orderId
})
.then((orderId)=>{
    return proceedTopayment(orderId)
})
.then((msg)=>{
    console.log(msg)
})
.catch((Err)=>{
    console.log(Err.message);
})
.finally(()=>{
    console.log("Done.................!!!");
})
function proceedTopayment(orderId){
    const pr=new Promise((resolve,reject)=>{
        resolve(`Payment Successful for ${orderId}`);
    })
    return pr;
}

function createOrder(cart){
    const pr=new Promise((resolve,reject)=>{
        const orderId="12345"
        if(!ValidOrder(orderId)){
           const Err=new Error("This is not valid order")
            reject(Err);
        }
        
        resolve(orderId);
    })
    
    return pr;
}

function ValidOrder(orderId){
    return true;
}