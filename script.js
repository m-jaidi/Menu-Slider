const tog = document.getElementById("toggle");
console.log(toggle);
const menu = document.querySelector(".menu");
console.log(menu);
const body = document.querySelector("body")


function toggleMenu() {
    let i;

    i = menu.classList.toggle("test");
    tog.style.left = "220px";
    tog.style.transition = "1s";

    if (i == false)
        tog.style.left = "20px";
};


const md = document.getElementById("modal");

function afficher() {
    md.style.display = "block";

}

function fermer() {
    md.style.display = "none";

}

// function fermer2() {
//     md.style.display = "none";

// }
window.addEventListener('click', function(event){
    if(event.target == md)
    md.style.display = "none";
})


const tache=document.getElementById("tache");
const p=document.getElementById("p");


function testLocalStorage(event){

event.preventDefault();

localStorage.setItem("tache2",tache.value);

p.textContent=localStorage.getItem("tache2");








}






