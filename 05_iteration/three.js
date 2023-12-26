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


const myObject={
    game1:'NFS',
    game2:'Spiderman'
}
// for(const [key,value] of myObject){
//     // console.log(key, ':-', value);


const coding =["js","ruby","java"]

coding.forEach(function(val){
    console.log(val)
})

coding.forEach((val)=>{console.log(val)})

const myCoding=[
    {
        language: "java",
        price:"99"
    },
    {
        language: "javaScript",
        price:"9"
    },
    {
        language: "c",
        price:"10"
    }
]
myCoding.forEach((item)=>{
    console.log(item.language);
})