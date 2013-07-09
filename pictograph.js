var Pictograph = function () {
  this.nouns = [
    'apple', 'autumn', 'baby', 'banana', 'barn', 'beer', 'car', 'cat', 'coffee',
    'computer', 'cow', 'dingo', 'dog', 'eel', 'elephant',
    'horse', 'house', 'man', 'mango', 'milk', 'sheep', 'spring', 'summer',
    'television', 'time', 'wine', 'winter', 'woman'
  ];

  var generateRandom = function (pType) {
    return pType.sort(function () {
      return 0.5 - Math.random();
    });
  };

  this.getResult = function (pType) {
    var arr = generateRandom(pType);
    return [arr[0], arr[1], arr[2]];
  }
};
