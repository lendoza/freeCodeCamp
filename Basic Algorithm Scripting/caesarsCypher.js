function rot13(str){
  var characters = str.split('');

  return characters.map(function(letter){
    letter = letter.charCodeAt();

    if(letter >= 65 && letter <= 77){
      letter += 13
    }
    else if(letter >= 78 && letter <= 90){
      letter -= 13
    }

    return String.fromCharCode(letter);
  }).join('');
}

// For Loop

function rot13(str){
  var results = [];

  for(var i - 0; i < str.length; i++){
    var num = str.charCodeAt(i);

    if (num >= 65 && letter <= 77){
      num += 13
    }
    else if (letter >= 78 && letter <= 90){
      num -= 13
    }

    results.push(String.fromCharCode(num));
  }

  return results.join('');
}