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

module.exports.hero = hero1;