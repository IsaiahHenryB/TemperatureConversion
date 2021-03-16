/*  
Temperature conversion app.

Part 1
Link this script file to the HTML file. Confirm it is linked by
console logging something.

Part 2
Create 2 HTML text elements in the HTML file so that we can display
our outputs to the user.

Part 3
Ask the user for the temperature in Fahrenheit.
Convert the number to Celcius and display it back to the user.

Part 4
If the degrees in Fahrenheit is less than 69, display a message
that says "Oh that's cold!".
If the degrees in Fahrenheit is greater than or equal to 69, the message
should say "Temperature is just right!".
Otherwise the message should say "That's not a temperature".

---
Equation is: °C = 5 / 9(°F - 32).

First think about each step, write your own notes about what to do, 
and then start coding. Remember to test your code throughout the 
whole process by checking the browser and the console.

For hints, check out the hints.txt file.
*/

let temp = prompt("Yo, name any temperature in farenheit, bruh? (Please enter numbers ex. 0-9)")

if(temp === ""){
    alert(`Please at least type something, Bruh!`)
}else if (temp < 40) {
    alert(`Whoa, bruh! ${temp}° is too cold bruh!`)
} else if (temp <= 100) {
    alert(`Okay bruh! ${temp}° that's a good temp for me!`)
} else if (temp > 100) {
    alert(`Whoa! ${temp}° is way too hot bruh!`)
}  else{
    alert(`${temp}!? That ain't even a temperature, bruh! Please type an ACTUAL number next time BRUH!`)
}

if (temp <= 0, temp >= 0){
   temp = Number(temp) 
} else {
    temp = temp;
}
console.log(typeof temp)

let cel = (5 / 9) * (temp - 32);
if (isNaN(temp)){
    document.getElementById("temperature").innerHTML = `Really Bruh!? ${temp} ain't even a number... SMH`
} else {
    // Made it so that it only displays two decimal places of the number in celcius.
    document.getElementById("temperature").innerHTML = `${cel.toFixed(2)}° is that temperature in celcius by the way. Bruh!`;
    document.getElementById("temp").innerHTML = `So ${temp}° is what you chose?`
}