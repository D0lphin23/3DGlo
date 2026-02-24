const modal = () => {
    const modal = document.querySelector(".popup");
    const buttons = document.querySelectorAll(".popup-btn");
    const modalContent = modal.querySelector(".popup-content");
    const screenWidth = window.innerWidth;

    const startPosition = -300;
    const endPosition = 0;
    const duration = 500; // Длительность анимации в миллисекундах
    const distance = 300;

    let startTime = null;

    buttons.forEach((button) =>
        button.addEventListener("click", () => {
            modal.style.display = "block";

            if (screenWidth > 768) {
                modalContent.style.transform = `translateY(${startPosition}px)`;

                startTime = null;

                requestAnimationFrame(animateModal);
            }
        }),
    );

    function animateModal(time) {
        if (!startTime) {
            startTime = time;
        }

        const progress = time - startTime;
        let percent = progress / duration;

        if (percent > 1) percent = 1;

        const currentPosition = startPosition + distance * percent;

        modalContent.style.transform = `translateY(${currentPosition}px)`;

        if (progress < duration) {
            requestAnimationFrame(animateModal);
        } else {
            modalContent.style.transform = `translateY(${endPosition}px)`;
        }
    }

    modal.addEventListener("click", (e) => {
        if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
            modal.style.display = "none";
        }
    });
};

export default modal;
