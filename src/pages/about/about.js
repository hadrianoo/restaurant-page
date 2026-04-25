import styles from "./about.module.css";

export const aboutPage = () => {
    const aboutContainer = document.createElement("div");
    aboutContainer.className = styles.aboutContainer;

    const aboutMd = () => {
        const container = document.createElement("div");
        const title = document.createElement("div");
        const contentOne = document.createElement("div");
        const contentTwo = document.createElement("div");

        container.className = styles.aboutMd;
        title.className = styles.title;

        title.textContent = "// ABOUT.MD";
        contentOne.textContent = "Who are we?";
        contentTwo.textContent = "Depends who you ask.";

        container.appendChild(title);
        container.appendChild(contentOne);
        container.appendChild(contentTwo);

        return container;
    };

    const readmeTxt = () => {
        const container = document.createElement("div");
        const title = document.createElement("div");
        const content = document.createElement("div");
        const version = document.createElement("div");

        container.className = styles.readmeTxt;

        title.textContent = "README.txt";
        content.textContent = "WebMac was founded in a garage in 1993, when our founder"
            + "Hadriano decided to merge humanity's two greatest inventions: the World Wide Web and the hamburger. "
            + "Since then, we've been cooking at Layer 7 of the OSI model and serving meals at the speed of light (±30ms ping). "
            + "No memory leaks. No food leaks. Usually.";
        version.textContent = "v1.993.0";

        container.appendChild(title);
        container.appendChild(content);
        container.appendChild(version);

        return container;
    };

    const mission = () => {
        const container = document.createElement("div");
        const title = document.createElement("div");
        const content = document.createElement("div");
        const statements = [
            {
                name: "HUNGER",
                first: "Zero hunger.",
                second: "Zero exceptions."
            },
            {
                name: "NETWORK",
                first: "Zero packet loss.",
                second: "Always."
            },
            {
                name: "UPTIME",
                first: "99.9% availability.",
                second: "Kitchen included."
            },
        ]

        container.className = styles.mission;
        title.textContent = "// MISSION STATEMENT";
        container.appendChild(title);

        for (const item of statements) {
            const statement = document.createElement("div");
            const name = document.createElement("div");
            const first = document.createElement("div");
            const second = document.createElement("div");

            name.textContent = item.name;
            first.textContent = item.first;
            second.textContent = item.second;

            statement.appendChild(name);
            statement.appendChild(first);
            statement.appendChild(second);
            container.appendChild(statement);
        }
        return container;
    };

    const kitchen = () => {
        const container = document.createElement("div");
        const title = document.createElement("div");
        const content = document.createElement("div");
        const technology = [
            {
                name: "INFRASTRUCTURE",
                first: "Liquid-cooled servers. We cook on them. Literally.",
            },
            {
                name: "STORAGE",
                first: "Ingredients cached in RAM. Cleared daily at midnight.",
            },
            {
                name: "PROTOCOL",
                first: "All orders processed via HTTP/3. No plaintext menus.",
            },
            {
                name: "SECURITY",
                first: "256-bit encrypted recipes. Chef's keys rotated weekly.",
            },
        ]

        container.className = styles.kitchen;
        title.textContent = "// KITCHEN TECHNOLOGY";
        container.appendChild(title);

        for (const item of technology) {
            const techContainer = document.createElement("div");
            const name = document.createElement("div");
            const first = document.createElement("div");

            name.textContent = item.name;
            first.textContent = item.first;

            techContainer.appendChild(name);
            techContainer.appendChild(first);
            container.appendChild(techContainer);
        }
        return container;
    };


    const certifications = () => {
        const container = document.createElement("div");
        const title = document.createElement("div");
        const content = document.createElement("div");
        const certs = [
            "ISO 9001",
            "GDPR Compliant",
            "Michelin * (unverified)",
            "Uptime 99.9%",
            "HACCP Certified",
            "No SQL Injections (probably)",
        ];

        container.className = styles.certification;
        title.textContent = "// CERTIFICATIONS";
        container.appendChild(title);

        for (const item of certs) {
            const certItem = document.createElement("div");

            certItem.textContent = item;

            container.appendChild(certItem);
        };
        return container;
    };




    aboutContainer.appendChild(aboutMd());
    aboutContainer.appendChild(readmeTxt());
    aboutContainer.appendChild(mission());
    aboutContainer.appendChild(kitchen());
    aboutContainer.appendChild(certifications());
    return aboutContainer;
};