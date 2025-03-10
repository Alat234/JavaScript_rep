
let car1=new Object();
car1["color"]="red";
car1.maxSpeed=90;
car1.driver={};
car1.tuning=true;
car1["number of accidents"]=0;
car1.driver.name="Atamaniuk Vladyslav";
car1.driver.category="C";
car1.driver["personal limination"]="No driving at night";


let car2= {
    color:"black",
    maxSpeed: 120,
    driver:{name:"Atamaniuk Vladyslav",category:"B",["personal limination"]:null},
    tuning: false,
    ["number of accident"]:2
}

car1.drive=function(){
    console.log("I am not driving at night");
}
car2.drive=function(){
    console.log("I can drive anytime")
}

car1.drive();
car2.drive();

function Truck(Color,  Weight, AvgSpeed, Brand, Model ){
    this.color=Color;
    this.weight=BigInt(Weight);
    this.avdSpeed=AvgSpeed;
    this.brand=Brand;
    this.model=Model;

    this.trip=function (){

        if(!this.driver){
            console.log("No driver assigned");

        }
        else {
    
                console.log(
                    "Driver "+this.driver.name+
                     (this.driver.nightDriving? " drives at night" : " does not drive at night")
                      +" and has "+this.driver.experience+" years of expiriense");

            
            


        }
    }


}
Truck.prototype.AssignDriver=function(name,nightDriving,experience){
    this.driver={
        name:name,
        nightDriving:nightDriving,
        experience:experience
    }

}
let truck1= new Truck("red",5000, 65,"Citroen","C4");
let truck2= new Truck("blue",6000, 55,"Citroen","C3");
truck1.AssignDriver("Vlad",true, 4 );
truck2.AssignDriver("Petro",false, 1 );
truck1.trip();
truck2.trip();
class Square{
    constructor(a){
        this.a=a;

    }
    static help() {
        console.log("Ососбливості квадрата.");
        console.log("1. Усі сторони квадрата рівні.");
        console.log("2. Усі кути квадрата прямі.");
        console.log("3. Діагоналі квадрата перетинаються під прямим кутом і точкою перетину діляться навпіл.");
    }
    lenght(){
        return this.a*4;
    }
    square(){
        return this.a*this.a;
    }
    info(){
        console.log("Інофромація про даний квадрат:");
        console.log("Всі сорони рівні і мають довжину: "+this.a);
        console.log("Всі кути рівні і дорівнюють: 90");
        console.log("Сума довжин сторін: "+this.lenght());
        console.log("Площа: "+this.square());
    }
   
}
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this._a = a;
        this._b = b;
    }

    static help() {
        console.log("Особливості Прямокутника");
        console.log("1. Протилежні сторони рівні та паралельні.");
        console.log("2. Протилежні кути рівні.");
        console.log("3. Діагоналі прямокутника рівні.");
        console.log("4. Діагоналі прямокутника перетинаються і точкою перетину діляться навпіл.");
    }

    lenght() {
        return 2 * (this._a + this._b);
    }

    square() {
        return this._a * this._b;
    }

    info() {
        console.log("Інформація про даний прямокутник:");
        console.log("Сторони: " + this._a + " і " + this._b);
        console.log("Всі кути рівні і дорівнюють: 90");
        console.log("Сума довжин сторін: " + this.lenght());
        console.log("Площа: " + this.square());
    }

    get a() {
        return this._a;
    }

    get b() {
        return this._b;
    }

    set a(value) {
        this._a = value;
    }

    set b(value) {
        this._b = value;
    }
}
class Rhombus extends Square{
    constructor(a, alpha, beta){
        super(a);
        this.alpha=alpha;
        this.beta=beta;
    }
    static help() {
        console.log("Особливості ромба.");
        console.log("1. Усі сторони ромба рівні.");
        console.log("2. Протилежні кути ромба рівні.");
        console.log("3. Діагоналі ромба перетинаються під прямим кутом і ділять одна одну навпіл.");
        console.log("4. Діагоналі є бісектрисами кутів ромба.");
    }
    lenght() {
        return 4*this.a; 
    }
    square() {
        let alphaInRadians = (this.alpha * Math.PI) / 180;
      return this.a*this.a*Math.sin(alphaInRadians);
    }
    info() {
        console.log("Інофромація про даний Ромб:");
        console.log("Сторони всі рівні: " + this.a );
        console.log("Кут apha="+this.alpha+", а кут beta= "+this.beta);
        console.log("Сума довжин сторін : " + this.lenght());
        console.log("Площа: " + this.square())
    }
}
/*------------------------------------------------------------*/
class Parallelogram extends Rhombus{
    constructor(a,b, alpha, beta){
        super(a,alpha,beta);
        this.b=b;
        
        
    }
    static help() {
        console.log("Особливості паралелограма.");
        console.log("1. Протилежні сторони паралелограма рівні та паралельні.");
        console.log("2. Протилежні кути паралелограма рівні.");
        console.log("3. Сума кутів, прилеглих до однієї сторони, дорівнює 180°.");
        console.log("4. Діагоналі паралелограма ділять одна одну навпіл.");
    }
    lenght() {
        return 2 * (this.a + this.b); 
    }
    square() {
        let alphaInRadians = (this.alpha * Math.PI) / 180;
      return this.a*this.b*Math.sin(alphaInRadians);
    }
    info() {
        console.log("Інофромація про даний Паралелограм:");
        console.log("Сторони: " + this.a + " і " + this.b);
        console.log("Кут apha="+this.alpha+", а кут beta= "+this.beta);
        console.log("Сума довжин сторін : " + this.lenght());
        console.log("Площа: " + this.square())
    }

}

Square.help();
Rectangle.help()
Rhombus.help();
Parallelogram.help();
let S=new Square(5);
S.info();
let Ret=new Rectangle(8,9);
Ret.info();
let Rom=new Rhombus(4,80,100);
Rom.info();
let P=new Parallelogram(5,7,60,120);
P.info();
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c }; 
}
let TR1 = Triangular(3,6,9);
let TR2 = Triangular(5,1,2);
let TR3 = Triangular();
console.log( TR1);
console.log(TR2);
console.log(TR3);
function PiMultiplier(number){
    return function (){
        return number*Math.PI;
    }

}
let multiplyBy2 = PiMultiplier(2);
let multiplyByThreeHalves = PiMultiplier(3 / 2);
let divideBy2 = PiMultiplier(1 / 2);


console.log(multiplyBy2());             
console.log(multiplyByThreeHalves());   
console.log(divideBy2()); 
function Painter(color) {
    return function (obj) {
        if (obj.hasOwnProperty('type')) {
            console.log(`${color}: ${obj.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}
let PaintBlue = Painter("Blue");
let PaintRed = Painter("Red");
let PaintYellow = Painter("Yellow");
let obj1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
};

let obj2 = {
    type: "Truck",
    "avg speed": 90,
    "load capacity": 2400
};

let obj3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
};
PaintBlue(obj1);  
PaintRed(obj2);   
PaintYellow(obj3); 
