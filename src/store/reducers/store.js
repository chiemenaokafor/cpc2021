import { combineReducers, createStore } from "redux";
import { imageModal } from "./imageModal";
import { auth } from "./auth";

const rootReducer = combineReducers({
    imageModal: imageModal,
    auth: auth,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
