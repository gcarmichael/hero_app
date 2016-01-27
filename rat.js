// require('./food');

var Rat = function(name, health){
  this.name = name;
  this.health = health;
  this.touch = function(food){
    food.poisoned = true;
  };
};

var henry = new Rat('Henry', 1000);

module.exports.rat = henry;