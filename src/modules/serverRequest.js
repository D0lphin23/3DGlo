import getData from "./getData";
import sendData from "./sendData";

const serverRequest = () => {
    getData("../db.json", "GET")
        .then((data) => {
            return sendData(
                "https://jsonplaceholder.typicode.com/posts",
                "POST",
                data,
            );
        })
        .then((result) => console.log("Успешно отправлен:", result))
        .catch((error) => console.error(error));
};

export default serverRequest;
