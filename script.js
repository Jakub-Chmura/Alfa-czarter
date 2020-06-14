
console.log ("witaj wędrowcze!");

(() => {
    const button = document.querySelector(".js-main-navigation__mobile-button");
    const menu = document.querySelector(".js-main-navigation__menu")

    const toggleClass = () => {
        menu.classList.toggle("main-navigation__menu--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();


let button = document.querySelector(".color-button");
let body = document.querySelector ("body");

button.addEventListener("click", () => {
    body.classList.toggle("grey-body");
    button.innerText = body.classList.contains("grey-body") ? "Ustaw białe tło strony" : "Ustaw szare tło strony";
});