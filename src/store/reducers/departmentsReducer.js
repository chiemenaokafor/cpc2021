const initialState = {};

export const departmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DEPARTMENTS":
            return { ...action.payload };
        default:
            return state;
    }
};
