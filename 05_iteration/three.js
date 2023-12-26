const arr=[1,2,3,4,5]

for(const num of arr){
    // console.log(num);
}

const greetings ='Hello World!'
for(const greeting of greetings){
    // console.log(`Each character ${greeting}`);
}

//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('Fr','France')

//console.log(map)

for(const [key,value] of map){
    console.log(key, ':-', value);
}


