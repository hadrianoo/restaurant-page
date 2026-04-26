import "./styles/global.css";
import { homePage } from "./pages/home/home.js";
import { menuPage } from "./pages/menu/menu.js";
import { footerPage } from "./footer.js";
import { aboutPage } from "./pages/about/about.js";

const renderPage = (() => {
    const home = homePage();
    const menu = menuPage();
    const about = aboutPage();
    const footer = footerPage();
    const nav = document.querySelector("nav");
    const content = document.querySelector("#content");
    const body = document.querySelector("body");

    content.appendChild(home);

    nav.addEventListener("click", (event) => {

        if (event.target.id !== "navBar") {
            content.innerHTML = "";
            const pages = { home, menu, about };
            content.appendChild(pages[event.target.id]);
        };
    });
    body.appendChild(footer);
})();

