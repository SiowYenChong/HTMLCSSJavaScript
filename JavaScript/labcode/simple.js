// Initialize an empty array to store category names
let categoryNames = [];

// Get references to various HTML elements using their IDs
let createCatBtn = document.querySelector("#createCatBtn");
let categoryEntry = document.querySelector("#categoryEntry");
let categoryBoxLocation = document.querySelector("#categoryBoxLocation");
let categoryOptions = document.querySelector("#categoryOptions");
let addCategoryStatus = document.querySelector("#addCategoryStatus");

let itemEntry = document.querySelector("#itemEntry");
let addItemBtn = document.querySelector("#addItemBtn");
let addItemStatus = document.querySelector("#addItemStatus");

// Function to create a new category element
let createNewCategory = function (categoryName) {
    // Create a new <div> element to represent the category
    let newDiv = document.createElement('div');
    newDiv.id = categoryName;
    newDiv.className = 'categoryBox';
    
    // Create a <p> element for the category title
    let newParagraph = document.createElement('p');
    newParagraph.className = 'categoryTitle';
    newParagraph.textContent = 'Category : ' + categoryName;
    newDiv.append(newParagraph);
    
    // Create an <ol> (ordered list) element to hold items within the category
    let newOL = document.createElement('ol');
    newOL.className = 'categoryList';

    // Append the title and list elements to the new category <div>
    newDiv.append(newOL);
    // Append the new category <div> to the specified location in the HTML
    categoryBoxLocation.append(newDiv);
    return newDiv;
};

// Function to check if an item already exists in a category
function itemExistsInCategory(innerOl, newItem) {
    console.log("items inside selected box");
    let children = innerOl.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].textContent === newItem)
            return true; // The item exists in the category
    }
    return false;

}

// Event listener for creating a new category when the "Create Category" button is clicked
createCatBtn.addEventListener('click', function (event) {
    // Check if the category name already exists
    if (categoryNames.indexOf(categoryEntry.value) >= 0) {
        addCategoryStatus.textContent = "That category already exists !";
        setTimeout(function () {
            addCategoryStatus.textContent = '';
        }, 2000);
    } else {
        // Add the new category name to the categoryNames array
        categoryNames.push(categoryEntry.value);
        console.log(categoryNames);
        // Create a new category element and add it to the HTML
        createNewCategory(categoryEntry.value);
        // Create an option for the category dropdown and add it
        const option = new Option(categoryEntry.value, categoryEntry.value);
        categoryOptions.add(option, undefined);
    }
    categoryEntry.value = '';
    categoryEntry.focus();
});

// Event listener for adding an item to a category when the "Add Item" button is clicked
addItemBtn.addEventListener('click', function (event) {

    console.log(itemEntry.value);
    console.log(categoryOptions.value);
    // first check to see whether the category exists

    // Get the selected category element
    let selectedBox = document.querySelector("#" + categoryOptions.value);
    console.log(selectedBox);

    let newLi = document.createElement('li');
    newLi.textContent = itemEntry.value;

    let innerOl = selectedBox.querySelector('ol');

     // Check if the item already exists in the category
    if (itemExistsInCategory(innerOl, itemEntry.value)) {
        addItemStatus.textContent = "That item already exists !";
        setTimeout(function () {
            addItemStatus.textContent = '';
        }, 2000);
    }
    else
        innerOl.appendChild(newLi); //Add the new item to the ordered list

    itemEntry.value = ''; // Clear the item entry input
    itemEntry.focus(); // Set focus back to the item entry input
});

