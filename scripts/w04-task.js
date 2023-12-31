/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Leonardo Salvatierra",
    photo: "images/me.png",
    favoriteFoods: [
        "Humita",
        "Empanadas tucumanas",
        "sanguches de milanesa",
        "asado"
    ],
    hobbies: [
        "play videogames",
        "cook",
        "walk with my wife"
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Rosario, Santa fe",
        length: "10 years"
    },
    {
        place: "Tafi Viejo, Tucuman",
        length:"17 years"
    }
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    document.getElementById("places-lived").appendChild(dt);
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.getElementById("places-lived").appendChild(dd);
});


