const initialState = {
    loggedIn: false,
    otpGenerated: false,
    error: null,
    userToken: null,
    mobileNo: null,
    articles: null,
};

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case 'OTP_GENERATED':
            return {
                ...state,
                otpGenerated: true,
                mobileNo: action.payload,
            };
        case 'SIGNIN_SUCCESS':
            return {
                ...state,
                error: null,
                userToken: action.payload,
            };
        case 'ARTICLES_FETCHED':
            return {
                ...state,
                error: null,
                articles: action.payload,
            };

        case 'FAIL':
            return {
                ...state,
                error: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                userToken: null,
            };
        default:
            return state;
    }
}

export default mainReducer;
