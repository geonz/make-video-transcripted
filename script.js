var maxFact = 10;
var minFact=1;
   // this is the max num for the factors
// oingo boingo I need to see what I called this in a more recent thing
function createMultImage()
{
 // make the string of text and variables that you want to be displayed
 let multPicHTML="";
 let numMax = maxFact*maxFact;
 for (let num=1; num<=maxFact; num++)
 {
   for(let fac=minFact; fac<=maxFact;fac++)
   { myFact= fac*num;
     multPicHTML +='  <div class = "item" id="d'+num + '" >' + myFact + ' </div>';}
  
 }
 // now make it the HTML
  multPic.innerHTML=multPicHTML;
}

createMultImage();
