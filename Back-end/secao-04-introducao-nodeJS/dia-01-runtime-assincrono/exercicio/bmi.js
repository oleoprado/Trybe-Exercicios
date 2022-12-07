const weight = 78;
const height = 1.78;

function calculatorBmi(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const bmi = weight / (height * 2);

  return bmi;
}

function main() {
  const bmi = calculatorBmi(weight, height);

  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();