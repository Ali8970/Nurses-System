let landing = document.querySelector(".landing");
let allimage = ["../images/istockphoto-1180634974-612x612.jpg", "../images/istockphoto-1204177269-612x612.jpg", "../images/istockphoto-1255590806-612x612.jpg", "../images/istockphoto-1271328971-612x612.jpg", "../images/istockphoto-1284041821-612x612.jpg"];

let interval = setInterval(() => {
    let randomNum = Math.floor(Math.random() * allimage.length);
    landing.style.backgroundImage = 'url("images/' + allimage[randomNum] + '")';
}, 1500);




let men = document.querySelector(".menu");
let arrow = document.querySelector(".header ul");


document.onclick = (e) => {
    if (e.target.className == "menu" || e.target.className == "m") {
        arrow.classList.toggle("none");
        men.classList.toggle("none");
    }
    else {
        arrow.classList.remove("none");
        men.classList.remove("none");
    }

};





