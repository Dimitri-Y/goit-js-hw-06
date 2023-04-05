let counterValue = 0;
const onDecrementButtonEvent = ()=> {
    counterValue-=1;
    const spanValue=document.querySelector('span#value');
    spanValue.textContent=counterValue;
};

const onIncrementButtonEvent = ()=> {
    counterValue += 1;
    const spanValue=document.querySelector('span#value');
    spanValue.textContent=counterValue;
};
const decButton =document.querySelector('button[data-action="decrement"]');
const incButton =document.querySelector('button[data-action="increment"]');
decButton.addEventListener('click', onDecrementButtonEvent);
incButton.addEventListener('click', onIncrementButtonEvent);

