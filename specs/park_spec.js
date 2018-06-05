const assert = require('assert');
const Park = require('../park.js');

describe('Park', function() {

  let park;

  beforeEach(function() {
    park = new Park();
  });

  it('should start with an empty enclosure', function() {
    assert.strictEqual(park.enclosure.length, 0);
  })

})
