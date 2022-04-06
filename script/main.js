var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/kot3.jpg') {
      myImage.setAttribute ('src','image/kot2.jpg');
    } else {
      myImage.setAttribute ('src','image/kot3.jpg');
    } 
    
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
myButton.onclick = function() {
    
  }