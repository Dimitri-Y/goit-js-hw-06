const input = document.querySelector("input#font-size-control");
const text= document.querySelector("span#text");

function inputHandler(event){
    text.style.fontSize = `${event.currentTarget.value}px`;
}

text.style.fontSize = `${input.value}px`;
input.addEventListener("change",inputHandler);


