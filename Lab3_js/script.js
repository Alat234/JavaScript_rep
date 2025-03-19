(function () {
  let names = [
    "Bill",
    "John",
    "Jen",
    "Jason",
    "Aaul",
    "Frank",
    "Steven",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (let name of names) {
    if (name.toLowerCase().charAt(0) === "j") {     
      SpikerGoodBye.speak(name);     
    } else {
      SpikerHello.speak(name);

    }
  }
  console.log("завдання 2 сотрутуємо за таблицею ASCII ")
  for(let name of names){
    SpikerHalf.speak(name);
    
  }
})();