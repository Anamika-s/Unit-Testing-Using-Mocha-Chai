// Include library 
const assert = require('chai').assert;
// include the file which contains method that you need to test
const App = require('../hello');
//const App1 = require('../hello').add;


// describe > it is a test suite , which contains some test cases
// it takes 2 parameters , 
// 1. Some message 2 Its takes callback function

// it > its a test case
// it also takes 2 parameters , 
// 1. Some message 2 Its takes callback function
 // assert > it is used for actually testing , comparing
 // actual result with expected result
 // assert > object
// Testing USES AAA
// A > Arrange
// A > Act
// A> Assert 



describe("This is a test suite for hello function", function()
{
  it("This shuld return Hello Message", function()
  {
    var actual = App.hello();
     assert.equal(actual, 'hello');
  })
  it('Type should be string', function()
  {
     var actual = App.hello();
     assert.typeOf(actual ,'string');
  })
});

 describe('This is a test suite for add function', function()
 {
    it("This shoud give sum of 2 nos", function()
  {
     var actual = App.add(1,3);
     assert.equal(actual,4);
  })
  it("Type of the result should be integer", function()
  {
     var actual = App.add(1,3);
     assert.typeOf(actual,'number');
  })
  it("Output should be more than 10", function()
  {
     var actual = App.add(10,30);
     assert.isAbove(actual,10);
  })
  it('Testing subtrxt method', ()=>
  {
    var actual = App.subtract(10,2);
    assert.equal(actual,8);
  })
});


describe('This is a test suite', ()=>
{
   it('Some message', ()=>
   {
     assert.notEqual(1,2);
   })
}) 






