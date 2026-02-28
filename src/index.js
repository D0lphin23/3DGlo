import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import validateInputs from "./modules/validateInputs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import serverRequest from "./modules/serverRequest";
import sendForm from "./modules/sendForm";

timer("26 April 2026");
menu();
modal();
tabs();
calc(100);
slider();
validateInputs();
serverRequest();

["form1", "form2", "form3"].forEach((id) => {
    sendForm({
        formId: id,
        someElem: [
            {
                type: "block",
                id: "total",
            },
        ],
    });
});
