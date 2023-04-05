const form =document.querySelector("form.login-form");
form.addEventListener("submit",handleSubmit);

function handleSubmit(event){
    event.preventDefault();  
    const object={};  
    const formElements = event.currentTarget.elements;
    const formData=new FormData(event.currentTarget);
      if (formElements.email.value === "" || formElements.password.value === "") {
        alert("Всі поля повинні бути не пусті!!!");
    }else{
        formData.forEach((value,name)=>{
            object[name]=value;
        });
        console.log(object);
    }
    event.currentTarget.reset();
}
