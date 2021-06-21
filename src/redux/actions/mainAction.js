import axios from 'axios';

const header = {
    transactionId: 'react_interview',
};

export function sendOTP(mobileNumber) {
    return dispatch => {
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
        return axios
            .post(
                `https://cors-anywhere.herokuapp.com/https://stage-services.truemeds.in/ArticleService/getArticleListing
                `,
                null,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin': '*',
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then(
                response => {
                    dispatch({ type: 'ARTICLES_FETCHED', payload: response.data.result.article });
                },
                err => {
                    console.log(err);
                    if (err.response) {
                        if (err.response.data.error === 'invalid_token') {
                            dispatch({ type: 'LOGOUT' });
                            localStorage.setItem('user', '');
                        } else {
                            dispatch({ type: 'FAIL', payload: err });
                        }
                    }
                }
            );
    };
}
export function logout() {
    localStorage.setItem('user', '');
    return {
        type: 'LOGOUT',
    };
}

export function setUser(token) {
    localStorage.setItem('user', token);
    return {
        type: 'SIGNIN_SUCCESS',
        payload: token,
    };
}
