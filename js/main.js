function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max>min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;}
  else {
    if (min===max) {
      return min;
    } else {return 'Значение От больше значения До';}
  }
}

getRandomIntInclusive(1,4);

//источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


function getRandomInclusive(min, max, afterPoint) {
  if (max>min) {
    return (min + Math.random() * (max - min)).toFixed(afterPoint);}
  else {
    if (min===max) {
      return min.toFixed(afterPoint);
    } else {
      return 'Значение От больше значения До';
    }
  }
}

getRandomInclusive(1.1,1.5,3);

//https://learn.javascript.ru/number
