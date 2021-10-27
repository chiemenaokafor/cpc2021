const URI = "/api/v1/";

const getSignature = async function () {
    return fetch(URI + "ShowSignature", { method: "GET" })
        .then((res) => {
            if (res.ok) {
                return res.json;
            }
            throw res;
        })
        .then((data) => data);
};

const postSignature = async function (email, comment) {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("comment", comment);
    return fetch(URI + "PostSignature", {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "form-data",
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json;
            }
            throw res;
        })
        .then((data) => data);
};
const updateSignature = async function (email, comment) {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("comment", comment);
    return fetch(URI + "UpdateSignature", {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "form-data",
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json;
            }
            throw res;
        })
        .then((data) => data);
};

const deleteSignature = async function (email, comment) {
    const formData = new FormData();
    formData.append("email", email);
    return fetch(URI + "PostSignature", {
        method: "DELETE",
        body: formData,
        headers: {
            "Content-Type": "form-data",
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json;
            }
            throw res;
        })
        .then((data) => data);
};

module.exports = {
    getSignature,
    postSignature,
    deleteSignature,
    updateSignature,
};
