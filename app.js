const calculateOperatingInjectorStream = require('./functions/calculateOperatingInjectorStream');
const calculateMaximunSpeedPercentage = require('./functions/calculateMaximumSpeedPercentage');

let getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max + 1));
};

let randomNumberOfInjectors = getRandomInt(9);
let randomInjectorDamagePercentages = [];

for (let i = 0; i < randomNumberOfInjectors; i++) {
  randomInjectorDamagePercentages.push(getRandomInt(100));
}
const randomSpeedOfLightPercentage = getRandomInt(199);


console.log('Número de inyectores:', randomNumberOfInjectors);
randomInjectorDamagePercentages.forEach((randomInjectorDamagePercentage, index) => {
  console.log(index + 1, 'Daño del inyector:', randomInjectorDamagePercentage + '%');
});
console.log('Velocidad requerida del porcentaje de luz', randomSpeedOfLightPercentage + '%');

// Showing results
console.log('Velocidad máxima del porcentaje de luz:', calculateMaximunSpeedPercentage(randomInjectorDamagePercentages) + '%');
console.log('Result:', calculateOperatingInjectorStream(randomInjectorDamagePercentages, randomSpeedOfLightPercentage));

let test = [67, 10, 39, 69, 100, 0, 10, 27];
let speed = 18;

console.log('Velocidad máxima del porcentaje de luz:', calculateMaximunSpeedPercentage(test) + '%');
console.log('Result:', calculateOperatingInjectorStream(test, speed));
