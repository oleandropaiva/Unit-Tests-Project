const average = (value1) => {
  if (value1.length === 0) {
  return (undefined);
}

let sum = 0;

for (let index = 0; index < value1.length; index += 1) {
  const type = typeof value1[index];
  if (type !== 'number') {
    return undefined;
  } sum += value1[index];
}
const averageEnd = Math.round(sum / value1.length);
return averageEnd;
};

module.exports = average;