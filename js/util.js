const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomInclusive = (min, max, afterPoint) => {
  if (max>min) {
    return (min + Math.random() * (max - min)).toFixed(afterPoint);}
  else {
    if (min===max) {
      return min.toFixed(afterPoint);
    } else {
      return 'Значение От больше значения До';
    }
  }
};

export {getRandomInt};
export {getRandomInclusive};
