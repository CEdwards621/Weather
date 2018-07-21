//Forecast today is 293 Kelvin 
const kelvin = 293;

//Convert kelvin to celsius
const celsius = kelvin - 273;

//convert celsius to farenheit
let fahrenheit = celsius * (9/5) + 32;
//round down temperature
fahrenheit = Math.floor(fahrenheit);

//convert celsius to newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
