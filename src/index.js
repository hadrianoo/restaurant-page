import "./styles/global.css";
import { homePage } from "./pages/home/home.js";
import { menuPage } from "./pages/menu/menu.js";
import { footerPage } from "./footer.js";

const renderPage = (() => {
    const home = homePage();
    const menu = menuPage();
    const footer = footerPage();
    const nav = document.querySelector("nav");
    const content = document.querySelector("#content");
    const body = document.querySelector("body");

    content.appendChild(home.homeContainer);
    // content.appendChild(home.introSection());
    // content.appendChild(home.servedSection());
    // content.appendChild(home.specialSection());
    // content.appendChild(home.reviewSection());


    nav.addEventListener("click", (event) => {
        if (event.target.id === "home") {
            content.innerHTML = "";

            content.appendChild(home.homeContainer);
            // content.appendChild(home.introSection());
            // content.appendChild(home.servedSection());
            // content.appendChild(home.specialSection());
            // content.appendChild(home.reviewSection());

        } else if (event.target.id === "menu") {
            content.innerHTML = "";

            content.appendChild(menu.menuContainer);
            // content.appendChild(menu.menuContent());

        } else if (event.target.id === "about") {
            content.innerHTML = "";

        }

    })

    body.appendChild(footer);

})();

