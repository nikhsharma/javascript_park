const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function() {
    park = new Park();
    dinosaur = new Dinosaur('Velociraptor', 3);
  });

  it('should start with an empty enclosure', function() {
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should be able to add a dinosaur to the enclosure', function() {
      park.addDinosaur(dinosaur);
      assert.strictEqual(park.enclosure.length, 1);
  });

})
