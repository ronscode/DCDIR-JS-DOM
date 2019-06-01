// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var myButton = document.getElementById("myButton");
var redBox = document.getElementsByClassName("box");

myButton.addEventListener("click", function() {
  for (let i = 0; i < redBox.length; i++) {
    redBox[i].style.backgroundColor = "blue";
  }
});
