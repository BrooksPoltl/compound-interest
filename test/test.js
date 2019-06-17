
var assert = require('assert');
const compound = require('../index')

describe('Testing Compound interest', function() {
  describe('period = 1 initial = 0', function() {
    const result = compound(0,100,5,.1)
    it('should return correct result', function() {
      assert.equal(result.result, 610.51);
    });
    it('should return correct array of total', function() {
        assert.deepEqual([0, 100, 210, 331, 464.1, 610.51],result.total);
    });
    it('should return correct array of interest', function() {
        assert.deepEqual([0, 0, 10, 31, 64.1, 110.51], result.interest);
    });
    it('should return correct array of principal', function() {
        assert.deepEqual([0,100,200,300,400,500], result.principal);
    });
  });
  describe('period = 12 initial = 0', function() {
    const result = compound(0,100,5,.1,12)
    it('should return correct result', function() {
        assert.equal(7743.71,result.result);
    });
    it('should return correct array of total', function() {
        assert.deepEqual([0,1256.56,2644.69, 4178.18, 5872.25, 7743.71],result.total);
    });
    it('should return correct array of interest', function() {
        assert.deepEqual([0, 56.56, 244.69, 578.18, 1072.25, 1743.71], result.interest);
    });
    it('should return correct array of principal', function() {
        assert.deepEqual([0,1200,2400,3600,4800,6000], result.principal);
    });
  });
  describe('period = 365 initial = 0', function() {
    const result = compound(0,100,5,.1,365)
    it('should return correct result', function() {
        assert.equal(236742.05,result.result);
      });
    it('should return correct array of total', function() {
        assert.deepEqual([0,38381.86,80799.8,127678.22, 179486.18, 236742.05],result.total);
    });
    it('should return correct array of interest', function() {
        assert.deepEqual([0,1881.86,7799.8,18178.22,33486.18,54242.05],result.interest);
    });
    it('should return correct array of principal', function() {
        assert.deepEqual([0,36500,73000,109500,146000,182500],result.principal);
    });
  });
});