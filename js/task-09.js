function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const ButtonHandler=()=>{
  const hexNumber=getRandomHexColor();
  body.style.backgroundColor =hexNumber;
  spanColor.textContent=hexNumber;
}
const changeColorBtn = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");
const body = document.querySelector('body');

changeColorBtn.addEventListener('click',ButtonHandler);