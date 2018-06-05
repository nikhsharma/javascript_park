const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur('Velociraptor');
  });

  it('should have a type', function() {
    assert.strictEqual(dinosaur.type, 'Velociraptor')
  });
})
