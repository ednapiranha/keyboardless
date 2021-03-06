var Word = function () {
  this.verbs = [
    'barking', 'complaining','driving', 'dumping', 'dying', 'eating', 'going',
    'hugging', 'jumping', 'meeting', 'running', 'singing', 'sleeping',
    'talking', 'thinking', 'walking', 'waxing', 'whining', 'whispering',
  ];

  this.adjectives = [
    'abysmal', 'belated', 'benign', 'caffeinated', 'cantankerous',
    'creative', 'boring', 'chunky', 'creepy', 'fast', 'funny', 'happy',
    'pretty', 'sad', 'serious', 'skinny', 'slow', 'smart', 'stupid', 'ugly'
  ];

  this.adverbs = [
    'abnormally', 'abundantly', 'adoringly', 'aimlessly', 'always', 'awkwardly',
    'blatantly', 'blessedly', 'blindly', 'bravely', 'briefly',
    'carefully', 'childishly', 'coherently', 'directly', 'drearily', 'easily',
    'eloquently', 'finally', 'figuratively', 'generally', 'loudly', 'quickly',
    'quietly', 'obnoxiously', 'painfully', 'painlessly', 'patiently', 'slowly'
  ];

  this.nouns = [
    'apple', 'autumn', 'baby', 'banana', 'barn', 'beer', 'car', 'cat', 'coffee',
    'computer', 'cow', 'dingo', 'dog', 'eel', 'elephant',
    'horse', 'house', 'man', 'mango', 'milk', 'sheep', 'spring', 'summer',
    'television', 'time', 'wine', 'winter', 'woman'
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
