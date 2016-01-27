var expect = require('chai').expect;
var hero = require('./hero').hero;

describe('Hero', function () {
  it('should have a name, health, and favourite food', function () {
    expect(hero.name).to.equal('Gary', 10, 'pasta');
  });
  it('should be able to talk and say their own name', function(){
    expect(hero.talk()).to.equal('My name is Gary.');
  })
});