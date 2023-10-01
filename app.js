// Using a for loop to generate a list of items
var itemList = document.getElementById("item-list");

for (var i = 1; i <= 5; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = "Item " + i;
    itemList.appendChild(listItem);
}

// Using a while loop to update CSS based on a variable value
var changeColorButton = document.getElementById("changeColorButton");
var backgroundColor = "lightblue";
var colorChangeFlag = false;

changeColorButton.addEventListener("click", function() {
    // Toggle the color between lightblue and lightcoral
    if (colorChangeFlag) {
        backgroundColor = "lightblue";
    } else {
        backgroundColor = "lightcoral";
    }
    
    // Update CSS styles based on the variable value
    itemList.style.backgroundColor = backgroundColor;
    colorChangeFlag = !colorChangeFlag;
});