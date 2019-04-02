var dodger = document.getElementById("dodger");


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left - 1}px`;
  }
  else if (e.key === "ArrowRight"){
   var rightNumbers = dodger.style.right.replace("px", "");
   var right = parseInt(rightNumbers, 10);
   dodger.style.right = `${right - 1}px`;
  }
});


function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}


function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}
