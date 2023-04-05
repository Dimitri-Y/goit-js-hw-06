const categories = document.querySelectorAll('ul#categories');
categories.forEach(element => {
    let items = element.querySelectorAll(".item");
    console.log(`Number of categories: ${items.length}`);
    items.forEach(i=>{        
        const hText = i.querySelector("h2"); 
        console.log(`Category: ${hText.textContent}`);
        const ArrayList = i.querySelectorAll("li");
        console.log(`Elements: ${ArrayList.length}`);
    });
});