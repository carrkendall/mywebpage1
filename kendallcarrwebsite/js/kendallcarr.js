<script src="kendallcarr.js"></script>
var button = document.getElementById("mybutton");
const myDiv = document.getElementById("links");
// Add a click event listener
button.addEventListener("click", function() {
  // Change the background color
  button.style.backgroundColor = "red";
  myDiv.style.backgroundColor = "green";
});
