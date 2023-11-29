/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Leonardo Salvatierra";
let currentYear = new Date().getFullYear();
let profilePicture = "images/me.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector("main picture img")



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt",`Profile image of ${fullName}`);



/* Step 5 - Array */
let favoriteFoods = ["Humita", "Sushi", "Empanadas Tucumanas", "Asado"];
foodElement.innerHTML = favoriteFoods.join(', ');
let favoriteSignleFood = "Pastel de batata";
favoriteFoods.push(favoriteSignleFood);     //Add the new favorite food to the array
foodElement.innerHTML += `<br>${favoriteFoods}`;    //this Display updated favorite foods with a line break before the entire list
favoriteFoods.shift();    //this remove the first element from the array
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`