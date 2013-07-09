var word = new Word();
var adverbs = word.getResult(word.adverbs);
var adjectives = word.getResult(word.adjectives);
var verbs = word.getResult(word.verbs);

var pictograph = new Pictograph();
var nouns = pictograph.getResult(pictograph.nouns);

var displayField = $('#display-field');

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

$('li').on('touchstart click', function (ev) {
  ev.preventDefault();

  displayField.append($(ev.target).text() + ' ');
});


$('button').on('touchstart click', function (ev) {
  ev.preventDefault();

  displayField.empty();
});
