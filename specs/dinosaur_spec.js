const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur('Velociraptor', 4);
  });

  it('should have a type', function() {
    assert.strictEqual(dinosaur.type, 'Velociraptor');
  });

  it('should have a number of offspring per year', function() {
    assert.strictEqual(dinosaur.offspringPerYear, 4);
  })
})
