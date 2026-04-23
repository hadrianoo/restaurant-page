import "./styles.css";
import { homePage } from "./home.js";


const home = homePage();

const content = document.querySelector("#content");
content.appendChild(home.introSection());
content.appendChild(home.servedSection());
content.appendChild(home.specialSection());
content.appendChild(home.reviewSection());
