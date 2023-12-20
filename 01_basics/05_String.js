const name="Shivdeep"
const repoCount = 50
//console.log(name + repoCount + " Value");

//below is preferable way to print string i.e String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

console.log(typeof name);
const gameName =new String('shivdeep')
console.log(typeof gameName);
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));


const newString ="   shivdeep   "
console.log(newString)
console.log(newString.trim());
console.log(newString.trimEnd());
console.log(newString.trimStart());

const url = "https://shivdeep.com/shivedeep%20Bisurkar"

console.log(url.replace('%20','-'))
console.log(url);