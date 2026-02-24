function menu() {
    const menu = document.querySelector("menu");

    const handleMenu = () => {
        menu.classList.toggle("active-menu");
    };

    const toggleMenu = (e) => {
        if (e.target.closest(".menu")) {
            handleMenu();
            return;
        }

        if (
            !e.target.closest("menu") ||
            e.target.closest(".close-btn") ||
            e.target.closest("menu ul>li>a")
        ) {
            menu.classList.remove("active-menu");
        }
    };

    document.addEventListener("click", toggleMenu);
}

export default menu;
