/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
function addNumbers (){
    let addNumber1 = Number (document.querySelector("#add1").value);
    let addNumber2 = Number (document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}
function subtractNumbers (){
    let subtractNumber1 = Number (document.querySelector("#subtract1").value);
    let subtractNumber2 = Number (document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply (number1, number2){
    return number1 * number2;
}
function multiplyNumbers (){
    let multiplyNumber1 = Number (document.querySelector("#factor1").value);
    let multiplyNumber2 = Number (document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (number1, number2){
    return number1 / number2;
}
function divideNumbers (){
    let divideNumber1 = Number (document.querySelector("#dividend").value);
    let divideNumber2 = Number (document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotalDue (){
    let subtotal = parseFloat(document.querySelector("#subtotal").value); 
    if (document.querySelector("#member").checked) {
        subtotal *= 0.85;
    }
    document.querySelector("#total").innerText = `${subtotal.toFixed(2)}`;
}
document.querySelector("#getTotal").addEventListener("click", getTotalDue);
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((acc, num) => acc + num, 0);
/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = multipliedArray.join(", ");
/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedArray = numbersArray.map(number => number * 2).reduce((acc, num) => acc + num, 0);
document.querySelector("#sumOfMultiplied").innerText = sumOfMultipliedArray;