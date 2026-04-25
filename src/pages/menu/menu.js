import styles from "./menu.module.css";

export const menuPage = () => {
    const menuContainer = document.createElement("div");
    menuContainer.className = styles.menuContainer;

    const menu = [
        { name: "404 Burger", description: "Ingredients not found — but it still tastes great.", price: 8.99, category: "Mains" },
        { name: "SQL Injection Soup", description: "'; DROP TABLE hunger; --", price: 7.99, category: "Soups" },
        { name: "Cookies Platter", description: "A platter of tracking cookies in 12 delicious data flavors.", price: 9.99, category: "Starters" },
        { name: "Firewall Fries", description: "So spicy they block your entire digestive system.", price: 4.99, category: "Sides" },
        { name: "Phishing Salad", description: "Looks like a Caesar. What you get — is a surprise.", price: 8.49, category: "Salads" },
        { name: "VPN Wrap", description: "A tortilla wrapping your meal in multi-layered privacy.", price: 10.49, category: "Mains" },
        { name: "Cache Cleared Cleanse", description: "Detox smoothie — wipes your history and your gut.", price: 6.49, category: "Drinks" },
        { name: "Ping Pong-u", description: "Asian noodle soup. Latency: 2ms. No packet loss.", price: 6.99, category: "Soups" },
        { name: "404 Shake", description: "A flavor that doesn't exist. Everyone gets something different.", price: 5.49, category: "Drinks" },
        { name: "DNS Dessert", description: "A cheesecake that resolves every order into an IP address.", price: 7.49, category: "Desserts" },
        { name: "Kernel Panic Pancakes", description: "Stack overflow of fluffy pancakes. System reboot required after eating.", price: 9.49, category: "Breakfast" },
        { name: "DDoS Dumplings", description: "So many dumplings they crash your stomach server.", price: 11.99, category: "Starters" },
        { name: "Buffer Overflow Brownie", description: "Exceeds all memory limits. Handle with care.", price: 5.99, category: "Desserts" },
        { name: "IPv6 Ice Cream", description: "128 unique flavors. You'll never run out of options.", price: 6.99, category: "Desserts" },
        { name: "Localhost Lemonade", description: "Only served to yourself. Nobody else can access it.", price: 3.99, category: "Drinks" },
        { name: "RAM Ramen", description: "Clears itself when you finish. No leftovers, no memory.", price: 8.99, category: "Mains" },
        { name: "Null Pointer Nachos", description: "Points to cheese that doesn't exist. Somehow still cheesy.", price: 7.49, category: "Starters" },
        { name: "Bluetooth Bruschetta", description: "Pairs automatically with any drink within 10 meters.", price: 6.49, category: "Starters" },
        { name: "Git Commit Kebab", description: "Each layer is a snapshot. Roll back to any previous bite.", price: 12.99, category: "Mains" },
        { name: "CAPTCHA Cake", description: "Prove you're human before ordering. Robots get nothing.", price: 8.49, category: "Desserts" },
    ];

    const menuHeader = () => {
        const container = document.createElement("div");
        container.textContent = "MENU";
        return container;
    };

    const menuContent = () => {
        const menuContainer = document.createElement("div");
        menuContainer.className = styles.menuGrid;
        for (const item of menu) {
            const menuItem = document.createElement("div");
            const name = document.createElement("div");
            const description = document.createElement("div");
            const price = document.createElement("div");

            name.className = styles.name;
            description.className = styles.description;
            price.className = styles.price;

            name.textContent = item.name;
            description.textContent = item.description;
            price.textContent = item.price;

            menuItem.appendChild(name);
            menuItem.appendChild(description);
            menuItem.appendChild(price);

            menuContainer.appendChild(menuItem);
        }
        return menuContainer;
    };

    menuContainer.appendChild(menuHeader());
    menuContainer.appendChild(menuContent());
    return menuContainer;
};