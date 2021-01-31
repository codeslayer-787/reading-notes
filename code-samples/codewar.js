function multiply(a, b){
  a * b
}
multiply();


function unixEpochTime(){
  var d = new Date()
  return d.getTime();
}

var testAlpha = unixEpochTime();
var testBeta = unixEpochTime;
