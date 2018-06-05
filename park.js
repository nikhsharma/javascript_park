const Park = function() {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaurByType = function (type) {
  for (i = 0; i < this.enclosure.length; i++) {
    if (this.enclosure[i].type === type) {
      this.enclosure.splice(i, 1);
      i--;
    }
  }
};

Park.prototype.dinosWithOver2Offspring = function() {
  const results = [];
  for (dinosaur of this.enclosure) {
    if (dinosaur.offspringPerYear > 2) {
      results.push(dinosaur);
    }
  }
  return results;
};

Park.prototype.projectedDinoCount = function(years) {
  total = 0;
  for (dinosaur of this.enclosure) {
    total += (1 + dinosaur.offspringPerYear)**years;
  }
  return total;
};

module.exports = Park;
