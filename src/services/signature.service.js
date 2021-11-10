const ENDPOINT_1 = "/api/v1/";

const getSignature = async function () {
    return fetch(ENDPOINT_1 + "ShowSignature", { method: "GET" })
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
    return fetch(ENDPOINT_1 + "PostSignature", {
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
    return fetch(ENDPOINT_1 + "UpdateSignature", {
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
    return fetch(ENDPOINT_1 + "PostSignature", {
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
