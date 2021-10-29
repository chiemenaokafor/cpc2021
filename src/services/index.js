import {
    getColleges,
    getProgrammesForADepartment,
    getDepartmentsForACollege,
} from "./colleges.service";
import { getUser, loginUser } from "./user.service";
import { getAStudent, getAllStudentsForAProgramme } from "./students.service";
import {
    getSignature,
    deleteSignature,
    postSignature,
    updateSignature,
} from "./signature.service";

export {
    getColleges,
    getDepartmentsForACollege,
    getProgrammesForADepartment,
    getUser,
    loginUser,
    getAStudent,
    getAllStudentsForAProgramme,
    getSignature,
    deleteSignature,
    postSignature,
    updateSignature,
};
