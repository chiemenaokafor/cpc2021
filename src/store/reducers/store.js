import { combineReducers, createStore } from "redux";
import { imageModal } from "./imageModal";

const rootReducer = combineReducers({
  imageModal: imageModal,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
