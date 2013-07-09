var Word = function () {
  this.verbs = [
    'barking', 'complaining','driving', 'dumping', 'dying', 'eating', 'going',
    'hugging', 'jumping', 'meeting', 'running', 'sleeping', 'talking',
    'thinking', 'walking', 'whining'
  ];

  this.adjectives = [
    'creative', 'boring', 'creepy', 'fast', 'fat', 'funny', 'happy', 'pretty',
    'sad', 'serious', 'skinny', 'slow', 'smart', 'stupid', 'ugly'
  ];

  this.adverbs = [
    'carefully', 'easily', 'finally', 'loudly', 'quickly', 'quietly',
    'obnoxiously', 'patiently', 'slowly'
  ];

  var generateRandom = function (wType) {
    return wType.sort(function () {
      return 0.5 - Math.random();
    });
  };

  this.getResult = function (wType) {
    var arr = generateRandom(wType);
    return [arr[0], arr[1], arr[2]];
  };
};
