var Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
};

Hero.prototype = {
  talk: function(){
    return 'My name is ' + this.name + '.';
  }
};

var hero1 = new Hero('Gary', 10, 'pasta');

var Food = function(name, energy){
  this.name = name;
  this.energy = energy;
}

var food1 = new Food('cheese', 50);

module.exports.gary = hero1;
module.exports.cheese = food1;