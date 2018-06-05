const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur2;

  beforeEach(function() {
    park = new Park();
    dinosaur = new Dinosaur('Velociraptor', 3);
    dinosaur2 = new Dinosaur('Tyrannosaurus', 3);
    dinosaur3 = new Dinosaur('Tyrannosaurus', 3);
  });

  it('should start with an empty enclosure', function() {
    assert.deepStrictEqual(park.enclosure, []);
  });

  it('should be able to add a dinosaur to the enclosure', function() {
      park.addDinosaur(dinosaur);
      assert.strictEqual(park.enclosure.length, 1);
  });

  it('should be able to remove all dinosaurs of a particular type', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaurByType('Tyrannosaurus');
    console.log(park.enclosure);
    assert.strictEqual(park.enclosure.length, 1);
  })
})
