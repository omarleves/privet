window.addEventListener("scroll",() => {
    const header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});




function myFunction() {
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("activ")

    let barth =  document.getElementById("barth")
}