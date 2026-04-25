import "./styles/global.css";
import { homePage } from "./pages/home/home.js";
import { footerPage } from "./footer.js";

const renderPage = (() => {
    const home = homePage();
    const footer = footerPage();
    const nav = document.querySelector("nav");
    const content = document.querySelector("#content");
    const body = document.querySelector("body");


    content.appendChild(home.introSection());
    content.appendChild(home.servedSection());
    content.appendChild(home.specialSection());
    content.appendChild(home.reviewSection());


    nav.addEventListener("click", (event) => {
        if (event.target.id === "home") {
            content.innerHTML = "";
            content.appendChild(home.introSection());
            content.appendChild(home.servedSection());
            content.appendChild(home.specialSection());
            content.appendChild(home.reviewSection());

        } else if (event.target.id === "menu") {
            content.innerHTML = "";

        } else if (event.target.id === "about") {
            content.innerHTML = "";

        }

    })

    body.appendChild(footer);

})();

