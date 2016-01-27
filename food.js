var Food = function(name, energy){
  this.name = name;
  this.energy = energy;
  this.poisoned = false;
}

var food1 = new Food('cheese', 50);
var food2 = new Food('pasta', 20);
var food3 = new Food('iceCream', 5);

module.exports.cheese = food1;
module.exports.pasta = food2;
module.exports.iceCream = food3;