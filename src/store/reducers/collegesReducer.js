const initialState = [];

export const collegesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_COLLEGES":
            return [...action.payload];
        default:
            return state;
    }
};
