var module = (function(){
  var count = 0
  var m1 = function () {
    console.log(count)
  }
  var m2 = function () {
    console.log(count+1)
  }
  return {
    m1,
    m2
  }
})()



