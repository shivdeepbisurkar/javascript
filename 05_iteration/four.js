// const nums=[1,2,3,4,5,6,7,8]

// const newnums= nums.map((num)=>num*10)
//                .map((num)=>num+1)
//                .filter((num)=>num>40)
// console.log(newnums);

const course=[
    {
        course:"JS",
        price:100
    },
    {
        course:"HTML",
        price:200
    },
    {
        course:"CSS",
        price:1000
    }
]

const total=course.reduce((acc,curr)=>(acc+curr.price),0)
console.log(total);