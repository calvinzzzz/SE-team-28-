const assert = require('char').assert;
const app = require('../app');

checkNumbersResult = app.checknumbers(10,10);

describe('App', function(){
  describe('checkNumbers()', function(){
    it('checknumbers should be above 10', function(){
      assert.isAbove(checkNumbersResult,10);
    });

    it('checknumbers should return type number', function(){
      assert.typeof(checkNumbersResult,'number');
    });
  });
});
