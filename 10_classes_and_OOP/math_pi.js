console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descripter);


const game={
    name: "GTA",
    price: "260",
    isAvailable: true,
    play : function(){
        console.log("start");
    }
}
console.log(Object.getOwnPropertyDescriptor(game,'name'));

Object.defineProperty(game,'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(game,'name'));


for (let [key,value] of Object.entries(game)) {
    if(typeof value !== 'function')
    console.log(`${key}: ${value}`);
}

game.play()