// // exports will make it public
// module.exports = function hello()
// {
//    return "hello";
// }

  module.exports = 
  {
    hello: function()
  {
    return "hello";
  }
,
   add : function(num1 , num2)
  {
     return num1 + num2;
  },
  subtract : function(num1 , num2)
  {
     return num1 - num2;
  }
}