let choice=prompt('Enter Your choice to convert 1 for Celsius to Fahrenheit and 2 for Fahrenheit to Celsius:');
if(choice==1){
    let Fahrenheit;
    let celsius=prompt('Enter temp in celsius:');
    Fahrenheit = (celsius * 9/5) + 32;
    console.log(`converted temp is ${Fahrenheit.toFixed(2)}°F`);
    alert(`converted temp is ${Fahrenheit.toFixed(2)}°F`);
}
if(choice==2){
    let Fahrenheit=prompt('Enter temp in Fahrenheit:');
    let celsius;
    celsius = (Fahrenheit -32) * 5/9;
    console.log(`converted temp is ${celsius.toFixed(2)}°C`);
    alert(`converted temp is ${celsius.toFixed(2)}°C`);
}