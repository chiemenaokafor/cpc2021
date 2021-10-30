const initialState = [];

export const programmesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PROGRAMMES":
            return [...action.payload];
        default:
            return state;
    }
};
