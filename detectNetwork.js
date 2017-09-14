// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Note: `cardNumber` will always be a string
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long

// Once you've read this, go ahead and try to implement this function, then return to the console.

var detectNetwork = function(cardNumber) {
  var cardLength = cardNumber.length;
  var prefix = cardNumber.slice(0,2);

  if(cardLength === 14 && (prefix === '38' || prefix === '39')) {
    return 'Diner\'s Club';
  }
  if(cardLength === 15 && (prefix === '34' || prefix === '37')) {
    return 'American Express';
  }
  if((cardLength === 13 || cardLength === 16 || cardLength === 19) && prefix === '41') {
    return 'Visa';
  }
  if((prefix === '51' || prefix === '52' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55') && cardLength === 16) {
    return 'MasterCard';
  }
  if(cardLength === 16 || cardLength === 19) {
    if(cardNumber.slice(0,4) === '6011') {
      return 'Discover';
    }
    if(cardNumber.slice(0,3) === '644') {
      return 'Discover';
    }
    if(cardNumber.slice(0,3) === '645') {
      return 'Discover';
    }
    if(cardNumber.slice(0,3) === '646') {
      return 'Discover';
    }
    if(cardNumber.slice(0,3) === '647') {
      return 'Discover';
    }
    if(cardNumber.slice(0,3) === '648') {
      return 'Discover';
    }
    if(cardNumber.slice(0,3) === '649') {
      return 'Discover';
    }
    if(cardNumber.slice(0,2) === '65') {
      return 'Discover';
    }
  }
  if(12 <= cardLength <= 19) {
    if(cardNumber.slice(0,4) === '5018') {
      return 'Maestro';
    }
    if(cardNumber.slice(0,4) === '5020') {
      return 'Maestro';
    }
    if(cardNumber.slice(0,4) === '5038') {
      return 'Maestro';
    }
    if(cardNumber.slice(0,4) === '6304') {
      return 'Maestro';
    }
  }
  if(cardLength === 16 || cardLength === 18 || cardLength === 19) {
    if(cardNumber.slice(0,4) === '4903') {
      return 'Switch';
    }
    if(cardNumber.slice(0,4) === '4905') {
      return 'Switch';
    }
    if(cardNumber.slice(0,4) === '4911') {
      return 'Switch';
    }
    if(cardNumber.slice(0,4) === '4936') {
      return 'Switch';
    }
    if(cardNumber.slice(0,4) === '6333') {
      return 'Switch';
    }
    if(cardNumber.slice(0,4) === '6759') {
      return 'Switch';
    }
    if(cardNumber.slice(0,6) === '633110') {
      return 'Switch';
    }
    if(cardNumber.slice(0,6) === '564182') {
      return 'Switch';
    }
  }
  if(16 <= cardLength <= 19) {
    if(622126 <= parseInt(cardNumber.slice(0,6),10) <= 622925) {
      return 'China UnionPay';
    }
    if(6282 <= parseInt(cardNumber.slice(0,4),10) <= 6288) {
      return 'China UnionPay';
    }
    if(624 <= parseInt(cardNumber.slice(0,3),10) <= 626) {
      return 'China UnionPay';
    }
  }
};
