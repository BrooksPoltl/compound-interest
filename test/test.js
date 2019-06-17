
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
  describe('period = 1 initial = 1000', function() {
    const result = compound(1000,100,5,.1)
    
    it('should return correct result', function() {
      assert.equal(result.result, 2221.02);
    });
    it('should return correct array of total', function() {
        assert.deepEqual([1000, 1200,1420, 1662, 1928.2, 2221.02],result.total);
    });
    it('should return correct array of interest', function() {
        assert.deepEqual([0, 100, 220, 362, 528.2, 721.02], result.interest);
    });
    it('should return correct array of principal', function() {
        assert.deepEqual([1000,1100,1200,1300,1400,1500], result.principal);
    });
  });
  describe('period = 12 initial = 1000', function() {
    const result = compound(1000,100,5,.1,12)
    it('should return correct result', function() {
        assert.equal(9389.02,result.result);
    });
    it('should return correct array of total', function() {
        assert.deepEqual([1000,2361.27,3865.08, 5526.36, 7361.6, 9389.02],result.total);
    });
    it('should return correct array of interest', function() {
        assert.deepEqual([0, 161.27, 465.08, 926.36, 1561.6, 2389.02], result.interest);
    });
    it('should return correct array of principal', function() {
        assert.deepEqual([1000,2200,3400,4600,5800,7000], result.principal);
    });
  });
  describe('period = 365 initial = 1000', function() {
    const result = compound(1000,100,5,.1,365)

    it('should return correct result', function() {
        assert.equal(238390.66,result.result);
      });
    it('should return correct array of total', function() {
        assert.deepEqual([1000,39487.02,82021.16,129028.02, 180977.93, 238390.66],result.total);
    });
    it('should return correct array of interest', function() {
        assert.deepEqual([0, 1987.02, 8021.16, 18528.02, 33977.93, 54890.66],result.interest);
    });
    it('should return correct array of principal', function() {
        assert.deepEqual([1000,37500,74000,110500,147000,183500],result.principal);
    });
  });
  describe('takes string arguments', function(){
      it('should take initial string',function(){
        const result = compound('1000',100,5,.1,12)
        assert.equal(9389.02,result.result);
      })
      it ('should take amount string',function(){
        const result = compound(1000,'100',5,.1,12)
        assert.equal(9389.02,result.result);
      })
      it('should take year string',function(){
        const result = compound(1000,100,'5',.1,12)
        assert.equal(9389.02,result.result);
      })
      it ('should take interest string',function(){
        const result = compound(1000,100,5,'.1',12)
        assert.equal(9389.02,result.result);
      })
      it ('should take period string', function(){
        const result = compound(1000,100,5,.1,'12')
        assert.equal(9389.02,result.result);
      })
  })
});