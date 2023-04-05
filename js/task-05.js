let text ="Anonymous"
const input  =  document.querySelector('input#name-input');
const output =  document.querySelector('span#name-output');
input.addEventListener("input",(event)=>{
    if(event.currentTarget.value !== ''){
        output.textContent=event.currentTarget.value;
    }else{
        output.textContent=text;
    }
});
