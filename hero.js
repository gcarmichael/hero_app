require('./food');

var Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.wererat = false;
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
  },
  attack: function(rat){
    if(this.wererat === true){
      rat.health += 100;
    } else{
      rat.health -= 100;
    };
  }
};

var hero1 = new Hero('Gary', 10, 'pasta');

module.exports.gary = hero1;