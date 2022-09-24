var TomBMI = { mass: 8, height: 9 };
var JerryBMI = { mass: 45, height: 10 };

function BMI(mass, height) {
  return mass / (height ^ 2);
}
if (TomBMI.mass > JerryBMI.mass) {
  console.log("True");
} else if (TomBMI.mass < JerryBMI.mass) {
  console.log("False");
}

console.log(`Is Tom's mass higher than Jerry's?`);
