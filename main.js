
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
var slideIndex = 1;//هيك انا بقولوا بالوضع الطبيعي 3 سلايدات 
showDivs(slideIndex);//هيك بعتتها 

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  
  var x = document.getElementsByClassName("video-container");//هيك حصلت ع الديف نفسه الي فيه الفيديو 
  if (n > x.length) {slideIndex = 1 }//هيك علشان هو بزيد زيادة فما بدي اياه يقل عن واحد ولا يزيد عن ستة يعني اذا صار اكبر من طوله رجعه واحد 
  if (n < 1) {slideIndex = x.length}
  for(i=0;i<x.length;i++){
    x[i].style.display = "none"; 
  }
  var n =slideIndex;
  for (var i = 0; i<3; i++) {
   
    x[n-1].style.display = "inline-block"; 
   n=n+1;

    if (n > x.length) {n = 1 }
//وهان تقريبا خلصت من الجافا سكريبت لل الفيديوهات   وكورونا لسا ما خلصتيش  
    
  }
  
     
  
  //x[slideIndex-1].style.display = "block";  
}

