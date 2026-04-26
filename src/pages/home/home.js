import styles from "./home.module.css";

export const homePage = () => {
    const homeContainer = document.createElement("div");
    homeContainer.className = styles.homeContainer;

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

        intro.className = styles.intro;
        name.className = styles.name;
        nameButtons.className = styles.nameButtons;

        web.textContent = "Web";
        mac.textContent = "Mac";
        since.textContent = "> Powering your hunger since 1993 <";
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

        served.className = styles.served;
        title.className = styles.title;

        title.textContent = "// total customers served";
        servedNumber.textContent = "1 554 420";

        served.appendChild(title);
        served.appendChild(servedNumber);

        return served;
    }

    const specialSection = () => {

        const specialsList = [
            {
                1: "FEATURED",
                2: "404 Burger",
                3: "Ingredients not found — but it still tastes great.",
                4: "$8.99",
            },
            {
                1: "SPICY",
                2: "Firewall Fries",
                3: "So hot they block your entire digestive system.",
                4: "$4.99",
            },
            {
                1: "NEW",
                2: "Cache Cleanse",
                3: "Wipes your history and your gut. Guaranteed.",
                4: "$6.49",
            }
        ]
        const specials = document.createElement("div");
        const title = document.createElement("div");
        const specialsContainer = document.createElement("div");

        title.className = styles.title;
        specials.className = styles.specials;

        title.textContent = "// today's specials";

        for (const obj of specialsList) {
            const homeDish = document.createElement("div");
            const first = document.createElement("div");
            const second = document.createElement("div");
            const third = document.createElement("div");
            const forth = document.createElement("div");

            homeDish.className = styles.homeDish;

            first.textContent = obj[1];
            second.textContent = obj[2];
            third.textContent = obj[3];
            forth.textContent = obj[4];

            homeDish.appendChild(first);
            homeDish.appendChild(second);
            homeDish.appendChild(third);
            homeDish.appendChild(forth);

            specialsContainer.appendChild(homeDish);
        }
        specials.appendChild(title);
        specials.appendChild(specialsContainer);

        return specials;
    }

    const reviewSection = () => {

        const reviewList = [
            {
                1: "@xXRootKitXx",
                2: "Power User",
                3: "The SQL Injection Soup literally dropped my table. 10/10 would overflow again.",
            },
            {
                1: "@n00b_eater",
                2: "Lurker",
                3: "Ordered the Phishing Salad. Got a burger. Didn't click any links this time.",
            },
            {
                1: "@ProxyGourmet",
                2: "Moderator",
                3: "VPN Wrap was so layered I never found the actual food. Still full somehow.",
            }
        ]
        const reviews = document.createElement("div");
        const title = document.createElement("div");
        const reviewContainer = document.createElement("div");

        title.className = styles.title;
        reviews.className = styles.reviews;

        title.textContent = "// customer reviews";

        for (const obj of reviewList) {
            const review = document.createElement("div");
            const first = document.createElement("div");
            const second = document.createElement("div");
            const third = document.createElement("div");

            review.className = styles.review;

            first.textContent = obj[1];
            second.textContent = obj[2];
            third.textContent = obj[3];

            review.appendChild(first);
            review.appendChild(second);
            review.appendChild(third);

            reviewContainer.appendChild(review);
        }
        reviews.appendChild(title);
        reviews.appendChild(reviewContainer);

        return reviews;
    }
    homeContainer.appendChild(introSection());
    homeContainer.appendChild(servedSection());
    homeContainer.appendChild(specialSection());
    homeContainer.appendChild(reviewSection());


    return homeContainer;

}
