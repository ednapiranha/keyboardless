var word = new Word();

var displayField = $('#display-field');
var maxWords = 0;

var randomize = function () {
  var adverbs = word.getResult(word.adverbs);
  var adjectives = word.getResult(word.adjectives);
  var verbs = word.getResult(word.verbs);
  var nouns = word.getResult(word.nouns);

  $('ul').empty();

  for (var i = 0; i < adverbs.length; i ++) {
    $('ul.adverbs').append('<li>' + adverbs[i] + '</li>');
  }

  for (var i = 0; i < adjectives.length; i ++) {
    $('ul.adjectives').append('<li>' + adjectives[i] + '</li>');
  }

  for (var i = 0; i < verbs.length; i ++) {
    $('ul.verbs').append('<li>' + verbs[i] + '</li>');
  }

  for (var i = 0; i < nouns.length; i ++) {
    $('ul.nouns').append('<li>' + nouns[i] + '</li>');
  }
};

randomize();

$('button').on('touchstart click', function (ev) {
  ev.preventDefault();

  var self = $(ev.target);

  if (self.hasClass('reset')) {
    maxWords = 0;
    displayField.empty();
  } else {
    randomize();
  }
});

$('ul').on('touchstart click', 'li', function (ev) {
  ev.preventDefault();

  if (maxWords < 4) {
    maxWords ++;
    displayField.append($(ev.target).text() + ' ');
  }
});
