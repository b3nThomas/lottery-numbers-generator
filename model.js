function log(content){
  console.log(content);
}

//Generate array of integers based on min/max values
function genNums(min, max) {
  var numbers = [];
  for(i = min; i <= max; i++){
    numbers.push(i);
  }
  return numbers;
}

//Fisher-Yates shuffle algorithm.
function randNums(array) {
  var currentIndex = array.length,
  tempValue,
  randIndex;

  while (0 !== currentIndex) {
    randIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempValue = array[currentIndex];
    array[currentIndex] = array[randIndex];
    array[randIndex] = tempValue;
  }
  return array;
}

//Get lottery numbers. [min, max] = range / [count] = how many numbers.
function luckyDip(min, max, count) {
    var myNumbers = [];
    var n = genNums(min, max)
    n = randNums(n);


    while(myNumbers.length < count) {
      myNumbers.push(n.pop());
    }
    log(myNumbers);
    return myNumbers;
}

log("model.js loaded...");
