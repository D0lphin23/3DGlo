const validateInputs = () => {
    const calcTextInput = document.querySelectorAll(
        ".calc-block > input[type='text']",
    );
    const nameTextInputs = document.querySelectorAll(
        "input[type='text']:not(.calc-item):not([name='user_message'])",
    );
    const messageTextInputs = document.querySelectorAll(
        "input[name='user_message']",
    );
    const emailTextInputs = document.querySelectorAll("input[type='email']");
    const telTextInputs = document.querySelectorAll("input[type='tel']");

    const regExpOnlyDigits = /\D/g;
    const regExpCyrillic = /[^а-яё\s]/gi;
    const regExpMessage = /[^а-яё0-9\s.,!?-]/gi;
    const regExpEmail = /[^a-z0-9@_.!~*'-]/gi;
    const regExpTel = /[^0-9+()-]/g;

    const setValidation = (inputs, regex) => {
        inputs.forEach((input) => {
            input.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(regex, "");
            });
        });
    };

    setValidation(messageTextInputs, regExpMessage);
    setValidation(calcTextInput, regExpOnlyDigits);
    setValidation(nameTextInputs, regExpCyrillic);
    setValidation(emailTextInputs, regExpEmail);
    setValidation(telTextInputs, regExpTel);
};

export default validateInputs;
