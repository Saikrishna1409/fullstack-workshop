const bmiCategories = [
    { range: [0, 18.5], label: 'Underweight' },
    { range: [18.5, 24.9], label: 'Normal' },
    { range: [25, 29.9], label: 'Overweight' },
    { range: [30, Infinity], label: 'Obese' }
];

const calculateBMI = (weight, height) => 
    (parseFloat(weight) / (parseFloat(height) ** 2)).toFixed(2);

const getCategory = (bmi) => 
    bmiCategories.find(({ range }) => 
        bmi >= range[0] && bmi <= range[1]
    )?.label || 'Obese';

const weight = prompt('Enter your weight in kg:');
const height = prompt('Enter your height in meters:');

if (weight && height) {
    const bmi = calculateBMI(weight, height);
    const category = getCategory(parseFloat(bmi));
    
    console.log(`Your BMI is ${bmi}, which is considered ${category}.`);
    alert(`Your BMI is ${bmi}, which is considered ${category}.`);
}
