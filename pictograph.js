var Pictograph = function () {
  this.nouns = [
    'baby', 'beer', 'car', 'cat', 'coffee', 'computer', 'dog', 'house', 'man',
    'time', 'wine', 'woman'
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
