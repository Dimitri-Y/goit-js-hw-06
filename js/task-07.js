function inputHandler(event){
    text.style.fontSize = `${event.currentTarget.value}px`;
}

const input = document.querySelector("input#font-size-control");
const text= document.querySelector("span#text");
input.addEventListener("change",inputHandler);


