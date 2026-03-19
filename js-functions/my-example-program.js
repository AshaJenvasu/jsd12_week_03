import readline from "readline";

function kgToPounds(kg) {
  return kg * 2.20462;
}

function poundsToKg(lb) {
  return lb * 0.453592;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter weight: ", function (weightInput) {
  const weight = parseFloat(weightInput);

  rl.question("Enter unit (K for Kg, P for Pounds): ", function (unitInput) {
    const unit = unitInput.trim().toUpperCase();

    let result;

    if (unit === "K") {
      result = kgToPounds(weight);
      console.log(`${weight} Kg is ${result.toFixed(2)} lbs`);
    } else if (unit === "P") {
      result = poundsToKg(weight);
      console.log(`${weight} lbs is ${result.toFixed(2)} Kg`);
    } else {
      console.log(`Invalid unit! Please enter K or P.`);
    }

    rl.close();
  });
});
