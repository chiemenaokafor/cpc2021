const URI = "/api/v1/user/";

const loginUser = async function (email, password) {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    return await fetch(URI + "login/", {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "form-data",
        },
    });
};

const getUser = async function (token) {
    return fetch(URI + "user/", {
        method: "GET",
        headers: { Authorization: "Token " + token },
    });
};

module.exports = { loginUser, getUser };
