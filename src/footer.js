export const footerPage = () => {
    const footer = document.createElement("footer");
    const firstDiv = document.createElement("div");
    const secondDiv = document.createElement("div");
    const thirdDiv = document.createElement("div");

    firstDiv.textContent = "WebMac Corp. © 1993-2026";
    secondDiv.textContent = "Hadriano, Founder & CEO";
    thirdDiv.textContent = "Ping: 2ms | Uptime: 99.9%";

    footer.appendChild(firstDiv);
    footer.appendChild(secondDiv);
    footer.appendChild(thirdDiv);

    return footer;
};