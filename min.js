var up = document.getElementById('text1');
var para = document.getElementById('text2');
var down = document.getElementById('text3');
up.innerHTML = "Click on the below button to remove an element";
function RemoveDOMelement() {
   para.remove();
   down.innerHTML = "The paragraph is deleted.";
}