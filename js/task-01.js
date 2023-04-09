const categories = document.querySelectorAll('ul#categories');
categories.forEach(element => {
    let items = element.querySelectorAll(".item");
    console.log(`Number of categories: ${items.length}`);
     items.forEach(i=>{        
        const hText = i.firstElementChild; 
        console.log(`Category: ${hText.textContent}`);
        const ArrayList = i.lastElementChild.children;
        console.log(`Elements: ${ArrayList.length}`);    
     });
});