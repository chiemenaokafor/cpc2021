import { combineReducers, createStore } from "redux";
import { imageModal } from "./imageModal";
import { auth } from "./auth";
import { collegesReducer } from "./collegesReducer";
import { departmentsReducer } from "./departmentsReducer";
import { programmesReducer } from "./programmesReducers";
import { studentReducer } from "./studentReducer";
import { studentsReducer } from "./studentsReducer";

const rootReducer = combineReducers({
    imageModal: imageModal,
    auth: auth,
    departments: departmentsReducer,
    colleges: collegesReducer,
    programmes: programmesReducer,
    student: studentReducer,
    students: studentsReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
