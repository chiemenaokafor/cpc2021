var FormData = require("form-data");

const URI = "/api/v1/user/";

const loginUser = async function (email, password) {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    let csrftokenCookieValue = document.cookie.replace(
        /(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
    );

    if (csrftokenCookieValue !== "") {
        formData.append("csrfmiddlewaretoken", csrftokenCookieValue);
    }

    return await fetch(URI + "login/", {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "multipart/form-data ",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => data)
        .catch((err) => console.error("Error: ", err));
};

const getUser = async function (token) {
    return fetch(URI + "user/", {
        method: "GET",
        headers: { Authorization: "Token " + token },
    });
};

module.exports = { loginUser, getUser };
