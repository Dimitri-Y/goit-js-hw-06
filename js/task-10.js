function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount){
  let width =30;
  let height=30;
  let string="";
  for(let i=0; i<amount; i++){
    string+=`<div width=${width+i*10}px height=${height+i*10}px background-color=${getRandomHexColor()} ></div>`;
  }
  divBoxes.insertAdjacentHTML("beforeend",string);
}
const createBtnHandler=()=>{
  createBoxes(input.value);
  console.log(input.value);
}

const destroyBoxes=()=>{
  divBoxes.innerHTML='';
}
const input=document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const deleteBtn = document.querySelector('[data-destroy]');
const divBoxes=document.querySelector('div#boxes');
createBtn.addEventListener("click",createBtnHandler);
deleteBtn.addEventListener("click",destroyBoxes);