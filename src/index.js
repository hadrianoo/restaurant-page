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
        if (event.target.id === "home") {
            content.innerHTML = "";
            content.appendChild(home);
        } else if (event.target.id === "menu") {
            content.innerHTML = "";
            content.appendChild(menu);
        } else if (event.target.id === "about") {
            content.innerHTML = "";
            content.appendChild(about)
        }
    })
    body.appendChild(footer);
})();

