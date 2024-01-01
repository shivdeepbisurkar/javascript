
let color=function(){
    const hex="0123456789ABCDEF"
    let change="#"
    for(let i=0;i<6;i++){
        change+=hex[Math.floor(Math.random()*16)]
    }
    return change
}
const start=document.querySelector("#start")
const stop=document.querySelector('#stop')
let intervalId;
start.addEventListener('click',()=>{
    if(!intervalId){
        intervalId=setInterval(bgcolor,1000)
    }
    
    function bgcolor(){
        document.body.style.backgroundColor=color()
        console.log("entered", color());
    }
    console.log("entered");
})

stop.addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId=null
})
console.log(start);
console.log(stop);