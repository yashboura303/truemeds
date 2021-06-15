import axios from 'axios';

const header = {
    transactionId: 'react_interview',
};

export function sendOTP(mobileNumber) {
    return dispatch => {
        dispatch({ type: 'LOADING' });
        return axios
            .post(`https://stage-services.truemeds.in/CustomerService/sendOtp?mobileNo=${mobileNumber}`, null, {
                headers: header,
            })
            .then(
                data => dispatch({ type: 'OTP_GENERATED', payload: mobileNumber }),
                err => dispatch({ type: 'FAIL', payload: err })
            );
    };
}

export function verifyOTP(mobileNumber, code) {
    return dispatch => {
        dispatch({ type: 'LOADING' });
        return axios
            .post(
                `https://stage-services.truemeds.in/CustomerService/verifyOtp?mobileNo=${mobileNumber}&otp=${code}&de
            viceKey=abcd&isIos=false&source=react_interview`,
                null,
                {
                    headers: header,
                }
            )
            .then(
                user => {
                    dispatch({ type: 'SIGNIN_SUCCESS', payload: user.data.Response.access_token });
                    localStorage.setItem('user', user.data.Response.access_token);
                },
                err => dispatch({ type: 'FAIL', payload: err })
            );
    };
}
export function getPosts(accessToken) {
    return dispatch => {
        dispatch({ type: 'LOADING' });
        return axios
            .post(
                `https://stage-services.truemeds.in/ArticleService/getArticleListing
                `,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then(
                data => dispatch({ type: 'ARTICLES_FETCHED', payload: data.result.article }),
                err => dispatch({ type: 'FAIL', payload: err })
            );
    };
}
export function logout() {
    localStorage.setItem('user', '');
    return {
        type: 'LOGOUT',
    };
}
