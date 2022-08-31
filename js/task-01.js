const categoriesNumber = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesNumber.length}`);

categoriesNumber.forEach(function (categories) {
    console.log("Category:", categories.firstElementChild.textContent);
    console.log("Elements:", categories.lastElementChild.children.length); 
})