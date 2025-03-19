(function(window){
    let SpikerHalf={}
    let speakWord1 = "Hi fist half";
    let speakWord2 = "hi second half";
  
  
    SpikerHalf.speak=function (name) {
        if(name.toLowerCase().charCodeAt(0)<110){

            
            console.log(speakWord1 + " " + name);
        }
        else{
            
            console.log(speakWord2 + " " + name);
        }
      
    }
       
    
  window.SpikerHalf=SpikerHalf;
  })(window)