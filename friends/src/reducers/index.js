


const initialState = {
    friends: [],
    errorStatusCode: null,
    fetchingData: false,
    isLoggedIn: false,
    error: ''
};

const reducer = (statee = initialState, action) => {
    switch(action.type) {
        default:
            return statee;
    }
}

export default reducer;