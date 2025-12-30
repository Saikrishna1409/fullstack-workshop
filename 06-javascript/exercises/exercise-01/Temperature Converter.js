const conversions = [
    { choice: '1', from: 'Celsius', to: 'Fahrenheit', formula: c => (c * 9/5) + 32, symbol: '°F' },
    { choice: '2', from: 'Fahrenheit', to: 'Celsius', formula: f => (f - 32) * 5/9, symbol: '°C' }
];

const choice = prompt('Enter your choice: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius:');

const conversion = conversions.find(c => c.choice === choice);

if (conversion) {
    const temp = prompt(`Enter temp in ${conversion.from}:`);
    const result = conversion.formula(parseFloat(temp)).toFixed(2);
    
    console.log(`Converted temp is ${result}${conversion.symbol}`);
    alert(`Converted temp is ${result}${conversion.symbol}`);
} else {
    alert('Invalid choice!');
}
