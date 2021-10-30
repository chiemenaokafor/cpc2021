const initialState = [];

export const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_STUDENTS":
            return [...action.payload];
        default:
            return state;
    }
};
