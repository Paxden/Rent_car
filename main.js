
let menu = document.querySelector("#menu-icon");
let cancel = document.querySelector("#cancel-icon");
let navbar = document.querySelector(".navbar");

function menu_click() {

    navbar.style.top = "100%"
    cancel.style.display = "block"
    menu.style.display = "none"   
};

function cancel_click() {

    navbar.style.top = "-500px"
    cancel.style.display = "none"
    menu.style.display = "block"   
}

const sr = ScrollReveal ({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
});


sr.reveal('.text', {delay:200, origin: 'top'})
sr.reveal('.form-container form', {delay:800, origin: 'left'})
sr.reveal('.heading', {delay:800, origin: 'top'})
sr.reveal('.ride-container .box', {delay:600, origin: 'top'})
sr.reveal('.services-container .box', {delay:600, origin: 'top'})
sr.reveal('.about-container .box', {delay:600, origin: 'top'})
sr.reveal('.about-container .about-img', {delay:600, origin: 'left'})
sr.reveal('.reviews-container', {delay:600, origin: 'top'})
sr.reveal('.newsletter .box', {delay:400, origin: 'bottom'})


  