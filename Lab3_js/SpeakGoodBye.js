(function(window){
  let SpikerGoodBye={}
  let speakWord = "Good Bye";

 SpikerGoodBye.speak=function (name) {
    console.log(speakWord + " " + name);
  }
  
window.SpikerGoodBye=SpikerGoodBye;
})(window)






