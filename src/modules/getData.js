const getData = (url, metod) => {
    return fetch(url, {
        method: metod,
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`Ошибка получения данных: ${response.status}`);
        }
        return response.json();
    });
};

export default getData;
