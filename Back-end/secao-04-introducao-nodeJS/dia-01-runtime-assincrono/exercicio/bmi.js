// const weight = 78;
// const height = 1.78;

const { questionFloat } = require('readline-sync');

function calculatorBmi(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const bmi = weight / (height * height);

  return bmi;
}

function main() {
  const weight = questionFloat('What’ your weight?');
  const height = questionFloat('What’ your height?');

  const bmi = calculatorBmi(weight, height);

  switch (true) {
    case (bmi >= 40):
      console.log('Obesidade graus III e IV');
      break;
    case (bmi >= 35):
      console.log('Obesidade grau II');
      break;
    case (bmi >= 30):
      console.log('Obesidade grau I');
      break;
    case (bmi >= 25):
      console.log('Acima do peso (sobrepeso)');
      break;
    case (bmi >= 18.5):
      console.log('Peso normal');
      break;
    default:
      console.log('Abaixo do peso (magreza)');
      break;
  }
  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();