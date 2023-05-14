// <script src="kendallcarr.js"></script>
var button = document.getElementById("mybutton");

// Add a click event listener
button.addEventListener("click", function() {
  // Change the background color
  if (button.classList.contains("button-changed")) {
    button.classList.remove("button-changed");
  } else {
    button.classList.add("button-changed");
  }

});
