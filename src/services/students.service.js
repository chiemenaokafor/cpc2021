const ENDPOINT_1 = "/api/v1/showprogramdetail/";
const ENDPOINT_2 = "/api/v1/showstudentdetail/";

const getAllStudentsForAProgramme = async function (programme) {
    return fetch(ENDPOINT_1 + programme, { method: "GET" })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then((data) => {
            if (data.length > 0) {
                return { success: true, data: data };
            } else {
                return { success: false };
            }
        })
        .catch((err) => ({ success: false, error: err }));
};

const getAStudent = async function (matricNo) {
    return fetch(ENDPOINT_2 + matricNo, { method: "GET" })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then((data) => ({ success: true, data: data }))
        .catch((err) => ({ success: false, error: err }));
};

module.exports = { getAllStudentsForAProgramme, getAStudent };
