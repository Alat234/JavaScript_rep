 function triangle(arg1, arg2 , arg3, arg4){
    function Pairs(a1,a2){
        if(typeof(a1)=="number"&&typeof(a2)=="string"){
            return{ 
                value: a1, type: a2

            }
        }
        else if(typeof(a1)=="string"&&typeof(a2)=="number"){
            return{ 
                value: a2, type: a1

            }
        }
        else{ console.log("Wrong combination type and value ") 
            return "failed";
        }

    }
    pair1=Pairs(arg1,arg2);
    pair2=Pairs(arg3,arg4);
    console.log(`Пара 1: ${pair1.type} = ${pair1.value}`);
    console.log(`Пара 2: ${pair2.type} = ${pair2.value}`);
    if(pair1.value<=0||pair2.value<=0){
      console.log("incorrect value. value < 0");

    }
    let a, b , c ,alpha,beta;
    //гіпотенуза + катет
    if((pair1.type=="leg"&& pair2.type=="hypotenuse")||(pair1.type=="hypotenuse"&& pair2.type=="leg")){
        if(pair1.type=="leg"){
            a=pair1.value;
            c=pair2.value;
        }  
        else{
            a=pair2.value;
            c=pair1.value;
        }
        if(c<a){
            console.log("incorrect value. hypotenuse < leg");
            return "failed";
        }
        b=Math.sqrt(c*c-a*a);
        let alphaInRadians=Math.asin(a/c);
        alpha=alphaInRadians*180/Math.PI;
        betaInRadians=Math.asin(b/c);
        beta= betaInRadians*180/Math.PI; 

        Print();
       
    }
    //Два катити
    else if(pair1.type=="leg"&& pair2.type=="leg"){
        a=pair1.value;
        b=pair2.value;
        c=Math.sqrt(a*a+b*b);
        let alphaInRadians=Math.asin(a/c);
        alpha=alphaInRadians*180/Math.PI;
        let betaInRadians=Math.asin(b/c);
        beta= betaInRadians*180/Math.PI;  
        Print();
       
    }
    //Катет і перлеглий кут
    else if((pair1.type=="leg"&& pair2.type=="adjacent angle")||(pair1.type=="adjacent angle"&& pair2.type=="leg")){
        if(pair1.type=="leg"){
            b=pair1.value;
            alpha=pair2.value;
        }
        else{
            let alpha=pair1.value;
            b=pair2.value;
        }
        if(alpha >= 90 ){
            console.log("incorrect value. angle has to be < 90");
            return "failed"
        }

         let alphaInRadians=alpha*Math.PI/180
         c=b/Math.cos(alphaInRadians);
         a=Math.sqrt(c*c-b*b);
         beta=90-alpha;
         Print();


    }
//Катет і протележний кут
    else if((pair1.type=="leg"&& pair2.type=="opposite angle")||(pair1.type=="opposite angle"&& pair2.type=="leg")){
        if(pair1.type=="leg"){
            b=pair1.value;
            beta=pair2.value;
        }
        else{
            beta=pair1.value;
            b=pair2.value;
        }
        if(beta>=90){
            console.log("incorrect value. angle has to be < 90");
            return "failed"

        }
        alpha=90-beta;
        let betaInRadians= beta *Math.Pi/180;
        c=b/Math.sin(betaInRadians);
        a=Math.sqrt(c*c-b*b);
        Print();

    }
    //Гіпотенуза і кут
    else if((pair1.type=="hypotenuse"&& pair2.type=="angle")||(pair1.type=="angle"&& pair2.type=="hypotenuse")){
        if(pair1.type=="hypotenuse"){
            c=pair1.value;
            beta=pair2.value;
        }
        else{
            beta=pair1.value;
            c=pair2.value;
        }
        if(beta>=90){
            console.log("incorrect value. angle has to be < 90");
            return "failed"

        }
        alpha=90-beta;
        let alphaInRadians=alpha*Math.PI/180
        a=c*Math.sin(alphaInRadians);
        b=c*Math.cos(alphaInRadians);
        Print();


    }
    else{
         console.log("incorrect type");
            return "failed"

    }

    function Print(){
        console.log("a= "+a);
        console.log("b= "+b);
        console.log("c= "+c);
        console.log("alpha= "+alpha);
        console.log("beta= "+beta);
    
    }

 }

 triangle(2,"hypotenuse",20,"angle");
