const form=document.querySelector('form')
console.log(form)

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const result= document.querySelector('#results');

    if(height=== ''||height < 0  || isNaN(height)){
        result.innerHTML=`<span>Please input valid height</span>`
    }else if(weight=== ''|| weight < 0 || isNaN(weight)){
        result.innerHTML=`<span>Please input valid weight</span>`
    }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span>${bmi}</span>`;
    }
});