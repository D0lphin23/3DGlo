const calc = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block");
    const calcType = calcBlock.querySelector(".calc-type");
    const calcSquare = calcBlock.querySelector(".calc-square");
    const calcCount = calcBlock.querySelector(".calc-count");
    const calcDay = calcBlock.querySelector(".calc-day");
    const total = document.getElementById("total");

    let animateId;

    const animateValue = (start, end, duration) => {
        let startTime = null;

        const step = (time) => {
            if (!startTime) {
                startTime = time;
            }

            const progress = time - startTime;
            const percent = Math.min(progress / duration, 1);
            const current = Math.floor(start + (end - start) * percent);

            total.textContent = current;

            if (percent < 1) {
                animateId = requestAnimationFrame(step);
            }
        };

        if (animateId) {
            cancelAnimationFrame(animateId);
        }

        animateId = requestAnimationFrame(step);
    };

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }
        if (calcType.value && calcSquare.value) {
            totalValue =
                price *
                calcTypeValue *
                calcSquareValue *
                calcCountValue *
                calcDayValue;
        } else {
            total.textContent = 0;
            return;
        }

        const startValue = +total.textContent || 0;
        animateValue(startValue, totalValue, 500);
    };

    calcBlock.addEventListener("input", (e) => {
        if (
            e.target === calcType ||
            e.target === calcSquare ||
            e.target === calcCount ||
            e.target === calcDay
        ) {
            countCalc();
        }
    });
};

export default calc;
