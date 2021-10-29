const URI_1 = "/api/v1/showprogramdetail/";
const URI_2 = "/api/v1/showstudentdetail/";

const getAllStudentsForAProgramme = async function (programme) {
    return fetch(URI_1 + programme, { method: "GET" })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then((data) => data)
        .catch((err) => console.error("Error: ", err));
};

const getAStudent = async function (matricNo) {
    return fetch(URI_2 + matricNo, { method: "GET" })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then((data) => data)
        .catch((err) => console.error("Error: ", err));
};

module.exports = { getAllStudentsForAProgramme, getAStudent };
