var Rat = function(name, health){
  this.name = name;
  this.health = health;
};

var henry = new Rat('Henry', 1000);

module.exports.rat = henry;