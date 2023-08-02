const categoriesItemsByClass = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesItemsByClass.length);

categoriesItemsByClass.forEach(item => { 
    console.log("category:", item.querySelector('h2').innerText);
    console.log("elements:", item.querySelectorAll('li').length);
    
})

