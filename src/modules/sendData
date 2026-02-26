const sendData = (url, metod, data) => {
    return fetch(url, {
        method: metod,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`Ошибка отправки: ${response.status}`);
        }
        return response.json();
    });
};

export default sendData;
