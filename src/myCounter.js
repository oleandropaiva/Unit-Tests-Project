const myCounter = () => {
  var myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let afterCounter = 2; afterCounter <= 3; afterCounter += 1) {
      myArray.push(afterCounter);
    }
  }
  return myArray;
};

module.exports = myCounter;
