const spanValue=document.querySelector('span#value');
const decButton =document.querySelector('button[data-action="decrement"]');
const incButton =document.querySelector('button[data-action="increment"]');
let counterValue = 0;

const onDecrementButtonEvent = ()=> {
    counterValue-=1;
    spanValue.textContent=counterValue;
};

const onIncrementButtonEvent = ()=> {
    counterValue += 1;
    
    spanValue.textContent=counterValue;
};

decButton.addEventListener('click', onDecrementButtonEvent);
incButton.addEventListener('click', onIncrementButtonEvent);

