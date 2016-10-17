$(document).ready(function() {

var sentence = prompt ("Write any sentence:")
console.info(sentence);

var firstLastCap = function(sentenceParam) {
  return sentenceParam.charAt(0).toUpperCase() + sentenceParam.charAt(sentenceParam.length-1).toUpperCase();
};

console.info(firstLastCap(sentence));

var reverser = function(sentenceParam2) {
  return sentenceParam2.charAt(sentenceParam2.length-1).toUpperCase() + sentenceParam2.charAt(0).toUpperCase();
};
console.info(reverser(sentence));

var doubleFunction = function(sentenceParam3) {
  return sentenceParam3 + reverser(firstLastCap(sentenceParam3))
};

console.info(doubleFunction(sentence));

var count = function(sentenceParam4) {
  return sentenceParam4.charAt(Math.floor(sentenceParam4.length / 2)) + doubleFunction(sentenceParam4)
};

console.info(count(sentence));

function reverse(sentenceParam5) {
  return sentenceParam5.split('').reverse().join('');
}

console.info(reverse(count(sentence)));


  $("#enigma").click(function() {
    alert(reverse(count(sentence)));
  });

  $("#turing").click(function() {
    alert(sentence);
  });
});
