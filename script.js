// Script for Our Team exercise

// creare un array di oggetti

const ourTeam = [
    {
        "name"  : "Wayne Barnett",
        "role"  : "Founder & CEO",
        "photo" : "img/wayne-barnett-founder-ceo.jpg"
        
    },
    {
        "name"  : "Walter Gordon",
        "role"  : "Office Manager",
        "photo" : "img/walter-gordon-office-manager.jpg"
    },
    {
        "name"  : "Angela Caroll",
        "role"  : "Chief Editor",
        "photo" : "img/angela-caroll-chief-editor.jpg"
    },
    {
        "name"  : "Barbara Ramos",
        "role"  : "Graphic Designer",
        "photo" : "img/barbara-ramos-graphic-designer.jpg"
    },
    {
        "name"  : "Angela Lopez",
        "role"  : "Social Media Manager",
        "photo" : "img/angela-lopez-social-media-manager.jpg"
    },


];
// creating a cycle for


// selecting the div Container
const containerTeam = document.querySelector("div.team-container");

for (i = 0; i < ourTeam.length; i++){
    // create card Element
    let teamCard = document.createElement("div");
    teamCard.classList.add("team-card");
    containerTeam.append(teamCard);
    // create div.card-image
    let divImage = document.createElement("div");
    divImage.classList.add("card-image");
    teamCard.append(divImage);
        let img = document.createElement("img");
        img.src = ourTeam[i].photo;
        divImage.append(img);

    // create div.card-text
    let divText = document.createElement("div");
    divText.classList.add("card-text");
        let nameTeam = document.createElement("h3");
        nameTeam.innerHTML = ourTeam[i].name;
        divText.append(nameTeam);

        let role = document.createElement("p");
        role.innerHTML = ourTeam[i].role;
        divText.append(role);

    // final card assembly
    teamCard.append(divText);
    teamCard.append(divImage);
    containerTeam.append(teamCard);

}
