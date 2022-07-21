var popUp = {
    name: document.getElementById("pop-up-heading"),
    description : document.getElementById("pop-up-description"),
    image: document.getElementById("featured-image"),
    technology: [document.getElementById("tech-skill1"), document.getElementById("tech-skill2"), document.getElementById("tech-skill3")],
    live: {text: document.getElementById("live-text"), icon: document.getElementById("live-icon")},
    source: {text: document.getElementById("source-text"), icon: document.getElementById("source-icon")},
}

var maper = function (name, description, image, technology) {
    popUp.name.innerHTML = name;
    popUp.description.innerHTML = description;
    popUp.image.src = image;
    popUp.technology[0].innerHTML = technology[0];
    popUp.technology[1].innerHTML= technology[1];
    popUp.technology[2].innerHTML= technology[2];
}

maper("Multi Post Stories", 
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
    "images/Snapshoot Portfolio.png", 
    ["Html", "Bootstrap", "Ruby on Rails"]);


const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")
const button5 = document.querySelector("#button5")
const button6 = document.querySelector("#button6")
const button7 = document.querySelector("#button7")

