import actionTypes from '../constants/actionTypes';
//import runtimeEnv from '@mars/heroku-js-runtime-env'
const env = process.env;

function reviewPosted(review) {
    return {
        type: actionTypes.POST_REVIEW,
        newReview: review
    }
}

export function postReview(newReview) {
    return dispatch => {
        newReview.username = localStorage.getItem('username');
        return fetch(`${env.REACT_APP_API_URL}/reviews`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors',
            body: JSON.stringify(newReview)
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then((res) => {
            if (!res.body.success) {
                throw Error(res.body.msg);
            }
            dispatch(reviewPosted(newReview));
        }).catch((e) => console.log(e));
    }
}