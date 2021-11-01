const ENDPOINT_1 = "/api/v1/showcollege/";
const ENDPOINT_2 = "/api/v1/showcollegedetail/";
const ENDPOINT_3 = "/api/v1/showdepartmentdetail/";

const getColleges = async function () {
    return fetch(ENDPOINT_1, {
        method: "GET",
        headers: {
            accepts: "application/json",
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then((data) => ({ success: true, data: data }))
        .catch((err) => ({ success: false, error: err }));
};

const getDepartmentsForACollege = async function (collegeCode) {
    return fetch(ENDPOINT_2 + collegeCode, { method: "GET" })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then((data) => ({ success: true, data: data }))
        .catch((err) => ({ success: false, error: err }));
};

const getProgrammesForADepartment = async function (departmentCode) {
    return fetch(ENDPOINT_3 + departmentCode, { method: "GET" })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then((data) => ({ success: true, data: data }))
        .catch((err) => ({ success: false, error: err }));
};

module.exports = {
    getColleges,
    getDepartmentsForACollege,
    getProgrammesForADepartment,
};
