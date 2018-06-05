const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function() {
    park = new Park();
    dinosaur = new Dinosaur('Velociraptor', 3);
    dinosaur2 = new Dinosaur('Tyrannosaurus', 1);
    dinosaur3 = new Dinosaur('Tyrannosaurus', 2);
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
    assert.strictEqual(park.enclosure.length, 1);
  })

  it('should return all dinosaurs with an offspring count more than 2', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(park.dinosWithOver2Offspring().length, 1);
  });
})
