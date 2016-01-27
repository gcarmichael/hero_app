var expect = require('chai').expect;
var hero = require('./hero').gary;
var cheese = require('./hero').cheese;
var pasta = require('./hero').pasta;
var rat = require('./rat').rat

describe('Hero', function(){
  it('should have a name, health, and favourite food', function(){
    expect(hero.name).to.equal('Gary', 10, 'pasta');
  });
  it('should be able to talk and say their own name', function(){
    expect(hero.talk()).to.equal('My name is Gary.');
  });
  it('should be able to eat food, and health should go up by the energy value', function(){
    hero.eat(cheese);
    expect(hero.health).to.equal(60);
  });
  it('should have health replenished by 1.5 times if food eaten is favourite', function(){
    hero.eat(pasta);
    expect(hero.health).to.equal(90);
  });
});

describe('Food', function(){
  it('should have a name and replenishment value', function(){
    expect(cheese.name).to.equal('cheese');
    expect(cheese.energy).to.equal(50);
  });
});

describe('Rat', function(){
  it('should have health and a name', function(){
      expect(rat.name).to.equal('Henry');
      expect(rat.health).to.equal(1000);
  });
});