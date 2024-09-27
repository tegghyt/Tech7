
/*
const elementH1 = document.getElementById("title")
const elementH1Class = document.getElementById("title")*/
/*
const elementH1 = document.querySelector("#title");
const elementH1Class = document.querySelector(".title")

console.log(elementH1);
console.log(elementH1Class);*/

/*
const elementH1Class = document.querySelector(".title")

console.log(elementH1Class.getBoundingClientRect());*/

const elementButtonMenu = document.querySelector("#button-menu");
const elementButtonCloseMenu = document.querySelector("#button-close-menu");
const elementSideBar = document.querySelector("#sidebar");

elementButtonMenu.addEventListener("click", () =>{
    elementSideBar.classList.add("open")
})

elementButtonCloseMenu.addEventListener("click", () =>{
    elementSideBar.classList.remove"open")
}) 