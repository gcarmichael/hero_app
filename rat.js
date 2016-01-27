// require('./food');

var Rat = function(name, health){
  this.name = name;
  this.health = health;
  this.touch = function(food){
    if (food.energy > 0 ) {
      food.energy *= -1;
    }
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