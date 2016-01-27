// require('./food');

var Rat = function(name, health){
  this.name = name;
  this.health = health;
  this.touch = function(food){
    food.poisoned = true;
  };
  this.bite = function(hero){
    hero.wererat = true;
  };
  this.split = function(name){
    this.health /= 2;
    return new Rat(name, this.health);
  }
};

var henry = new Rat('Henry', 1000);

module.exports.henry = henry;