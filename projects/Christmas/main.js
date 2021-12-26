const searchbtn = document.querySelector("#search-btn")
const searchform = document.querySelector(".search-form")

function search(){
    searchbtn.classList.toggle("fa-times")
    searchform.classList.toggle("active")
    menubtn.classList.remove("fa-times")
    navbar.classList.remove("active")
};


const menubtn = document.querySelector("#menu-btn")
const navbar = document.querySelector(".header header .navbar")

function toggle(){
    navbar.classList.toggle("active")
    menubtn.classList.toggle("fa-times")
    searchbtn.classList.remove("fa-times")
    searchform.classList.remove("active")
};


window.onscroll = () => {
    searchbtn.classList.remove("fa-times")
    searchform.classList.remove("active")
    menubtn.classList.remove("fa-times")
    navbar.classList.remove("active")
}