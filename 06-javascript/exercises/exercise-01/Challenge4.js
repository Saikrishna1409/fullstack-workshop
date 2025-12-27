let weight = parseFloat(prompt('Enter your weight in kg:'));
let height = parseFloat(prompt('Enter your height in meters:'));
let bmi = weight / (height * height);
bmi = bmi.toFixed(2);
let category = '';
if (bmi < 18.5) {
    category = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'Normal';
} else if (bmi >= 25 && bmi <= 29.9) {
    category = 'Overweight';
} else {
    category = 'Obese';
}  
console.log(`Your BMI is ${bmi}, which is considered ${category}.`);
alert(`Your BMI is ${bmi}, which is considered ${category}.`);
