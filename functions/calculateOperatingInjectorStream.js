const calculateMaximumIndefiniteStream = require('./calculateMaximumIndefiniteStream');
const calculateMaximunSpeedPercentage = require('./calculateMaximumSpeedPercentage');

let calculateOperatingInjectorStream = (damagePercentages, speedOfLightPercentage) => {
  const numberOfInjectors = damagePercentages.length;
  if (speedOfLightPercentage >= 0 && speedOfLightPercentage < 200 && numberOfInjectors > 0) {
    const requiredSpeedOfLight = numberOfInjectors * speedOfLightPercentage;
    let res = {
      streams: [],
      tiempoFuncionamiento: 0,
      maximumSpeedPercentage: calculateMaximunSpeedPercentage(damagePercentages)
    };
    
    let maximumIndefiniteStreams = [];
    damagePercentages.forEach(damagePercentage => {
      maximumIndefiniteStreams.push(calculateMaximumIndefiniteStream(damagePercentage));
    });
    const sumOfStreams = maximumIndefiniteStreams.reduce((a, b) => a + b);
    let difference = Math.abs(sumOfStreams - requiredSpeedOfLight);
    const divisor = numberOfInjectors - maximumIndefiniteStreams.filter(v => v === 0).length;
    let quotient = difference / divisor;
    if (sumOfStreams >= requiredSpeedOfLight) {
      maximumIndefiniteStreams.forEach((maximumIndefiniteStream, index) => {
        console.log(difference, quotient, maximumIndefiniteStream);
        if (maximumIndefiniteStream >= quotient) {
          difference -= quotient;
          res.streams.push(maximumIndefiniteStream === 0 ? maximumIndefiniteStream : maximumIndefiniteStream - quotient);
        }
        else {
          difference = difference - 2 * maximumIndefiniteStream + quotient;
          quotient = difference / (divisor - (index + 1));
          res.streams.push(maximumIndefiniteStream);
        }
      });
      res.tiempoFuncionamiento = 'Infinito';
    } else {
      if (quotient <= 99) {
        maximumIndefiniteStreams.forEach(maximumIndefiniteStream => {
          res.streams.push(maximumIndefiniteStream === 0 ? maximumIndefiniteStream : maximumIndefiniteStream + quotient);
        });
        res.tiempoFuncionamiento = 100 - quotient;
      } else return 'No se puede cumplir';
    }
    return res;
  } else return 'No se puede cumplir';
};

module.exports = calculateOperatingInjectorStream;
