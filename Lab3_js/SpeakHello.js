(function(window){
  let SpikerHello={}
  let speakWord = "Hello";



  SpikerHello.speak=function (name) {
    console.log(speakWord + " " + name);
  }
  
window.SpikerHello=SpikerHello;
})(window)









