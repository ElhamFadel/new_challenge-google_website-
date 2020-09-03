
function down(obj){

    var height =obj.clientHeight;
    var comp= 100 ;
    obj.style.transition = "all 2s ease-in-out";
    
    if(height>comp){
        obj.style.height = "3rem";  
    }else{
         obj.style.height = "15rem";
    }
    //obj.style.height=100 +'px';

}
// code from w3 with simple my change
var slideIndex = 2;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("video");
  if (n > x.length) {slideIndex = 1 }
  if (n < 1) {slideIndex = x.length}
  for (i = slideIndex; i <= x.length; i++) {
    x[i+1].style.display = "none";  
  }
  for (i = slideIndex; i < 0; i--) {
    if (i > x.length) {slideIndex = 1 }
    if (i < 1) {slideIndex = x.length}

    x[i+1].style.display = "block";  
  }
  //x[slideIndex-1].style.display = "block";  
}

