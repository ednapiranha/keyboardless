var word = new Word();
var pictograph = new Pictograph();

var displayField = $('#display-field');

var randomize = function () {
  var adverbs = word.getResult(word.adverbs);
  var adjectives = word.getResult(word.adjectives);
  var verbs = word.getResult(word.verbs);
  var nouns = pictograph.getResult(pictograph.nouns);

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
    displayField.empty();
  } else {
    randomize();
  }
});

$('ul').on('touchstart click', 'li', function (ev) {
  ev.preventDefault();

  displayField.append($(ev.target).text() + ' ');
});
