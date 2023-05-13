
var buttons = document.getElementsByClassName("myButton");

// Add click event listeners to all buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // Change the background color
    this.style.backgroundColor = "red";
  });
}
