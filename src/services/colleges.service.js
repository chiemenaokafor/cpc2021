const URI_1 = "/api/v1/showcollege/";
const URI_2 = "/api/v1/showcollegedetail/";
const URI_3 = "/api/v1/showdepartmentdetail";

const getColleges = async function () {
    return fetch(URI_1, {
        method: "GET",
    })
        .then((res) => {
            if (res.ok) {
                res.json();
            }
            throw res;
        })
        .then((data) => ({ success: true, data: data }))
        .catch((err) => console.error("Error:", err));
};

const getDepartmentsForACollege = async function (collegeCode) {
    return fetch(URI_2 + collegeCode, { method: "GET" })
        .then((res) => {
            if (res.ok) {
                res.json();
            }
            throw res;
        })
        .then((data) => ({ success: true, data: data }))
        .catch((err) => console.error("Error:", err));
};

const getProgrammesForADepartment = async function (departmentCode) {
    return fetch(URI_3 + departmentCode, { method: "GET" })
        .then((res) => {
            if (res.ok) {
                res.json();
            }
            throw res;
        })
        .then((data) => ({ success: true, data: data }))
        .catch((err) => console.error("Error:", err));
};

module.exports = {
    getColleges,
    getDepartmentsForACollege,
    getProgrammesForADepartment,
};
