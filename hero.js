require('./food');

var Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.wererat = false;
  this.hasAntidote = true;
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
  },
  antidote: function(){
    if(this.hasAntidote === true){
      this.wererat = false;
    } else{
      console.log(this.name + " has no antidotes! They can't cure their wererat status!");
    }
  }
};

var hero1 = new Hero('Gary', 10, 'pasta');

module.exports.gary = hero1;