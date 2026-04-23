export const homePage = () => {

    const introSection = () => {
        const intro = document.createElement("div");
        const name = document.createElement("div");
        const web = document.createElement("div");
        const mac = document.createElement("div");
        const since = document.createElement("div");
        const barContainer = document.createElement("div");
        const bar = document.createElement("div");
        const loading = document.createElement("div");
        const nameButtons = document.createElement("div");
        const viewMenuButton = document.createElement("button");
        const bookTableButton = document.createElement("button");

        intro.id = "intro";
        name.className = "name";
        nameButtons.id = "name-buttons";

        web.textContent = "Web";
        mac.textContent = "Mac";
        since.textContent = "Powering your hunger since 1993";
        loading.textContent = "Loading flavors... 99%"
        viewMenuButton.textContent = "View Menu";
        bookTableButton.textContent = "Book a Table";

        name.appendChild(web);
        name.appendChild(mac);
        intro.appendChild(name);


        intro.appendChild(since);

        barContainer.appendChild(bar);
        barContainer.appendChild(loading);
        intro.appendChild(barContainer);


        nameButtons.appendChild(viewMenuButton);
        nameButtons.appendChild(bookTableButton);
        intro.appendChild(nameButtons);

        return intro;
    }

    const servedSection = () => {
        const served = document.createElement("div");
        const title = document.createElement("div");
        const servedNumber = document.createElement("div");

        served.id = "served";
        title.id = "title";

        title.textContent = "// total customers served";
        servedNumber.textContent = "1 554 420";

        served.appendChild(title);
        served.appendChild(servedNumber);

        return served;
    }

    const specialSection = () => {

    }

    const reviewSection = () => {

    }

    return {
        introSection,
        servedSection,
        specialSection,
        reviewSection
    }
}
