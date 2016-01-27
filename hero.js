var Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
};

Hero.prototype = {
  talk: function(){
    return 'My name is ' + this.name + '.';
  },
  eat: function(food){
    if(this.favouriteFood === food.name){
      this.health += (food.energy * 1.5);
    } else{
      this.health += food.energy;
    };
  }
};

var hero1 = new Hero('Gary', 10, 'pasta');

var Food = function(name, energy){
  this.name = name;
  this.energy = energy;
}

var food1 = new Food('cheese', 50);
var food2 = new Food('pasta', 20);

module.exports.gary = hero1;
module.exports.cheese = food1;
module.exports.pasta = food2;