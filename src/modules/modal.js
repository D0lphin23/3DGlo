import { animate } from "./helpers";

const modal = () => {
    const modal = document.querySelector(".popup");
    const buttons = document.querySelectorAll(".popup-btn");
    const modalContent = modal.querySelector(".popup-content");
    const screenWidth = window.innerWidth;

    const startPosition = -300;
    const duration = 500;
    const distance = 300;


    buttons.forEach((button) =>
        button.addEventListener("click", () => {
            modal.style.display = "block";

            if (screenWidth > 768) {
                modalContent.style.transform = `translateY(${startPosition}px)`;

                animate({
                    duration,
                    timing: (percent) => percent,
                    draw: (progress) => {
                        const currentPosition =
                            startPosition + distance * progress;
                        modalContent.style.transform = `translateY(${currentPosition}px)`;
                    },
                });
            }
        }),
    );

    modal.addEventListener("click", (e) => {
        if (
            !e.target.closest(".popup-content") ||
            e.target.classList.contains("popup-close")
        ) {
            modal.style.display = "none";
        }
    });
};

export default modal;
