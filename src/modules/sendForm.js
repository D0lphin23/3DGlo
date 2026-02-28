const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement("div");
    const loadText = "Загрузка...";
    const errorText = "Ошибка...";
    const successText = "Спасибо! Наш менеджер скоро с вами свяжется!";

    const validate = (list) => {
        return [...list].every((input) => input.value.trim() !== "");
    };

    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (!res.ok) {
                throw new Error(`Server error: ${res.status}`);
            }
            return res.json();
        });
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll("input");
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id);

            if (elem.type === "block") {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === "input") {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then((data) => {
                    statusBlock.textContent = successText;

                    formElements.forEach((input) => {
                        input.value = "";
                    });
                })
                .catch((error) => {
                    statusBlock.textContent = errorText;
                });
        } else {
            alert(
                "Поля ввода не должны быть пустыми, пожалуйста, заполните все поля корректно.",
            );
        }
    };

    try {
        if (!form) {
            throw new Error(`Верните форму отправки на место, пожалуйста!`);
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            submitForm();
        });
    } catch (e) {
        console.log(e.message);
    }
};

export default sendForm;
