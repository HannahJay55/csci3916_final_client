import actionTypes from '../constants/actionTypes';
const env = process.env;

function commentsFetched(comments, videoId) {
    return {
        type: actionTypes.FETCH_COMMENTS,
        comments: comments,
        videoId: videoId
    }
}
function commentPosted(comment, videoId) {
    return {
        type: actionTypes.POST_COMMENT,
        comment: comment,
        videoId: videoId
    }
}

export function postComment(newComment) {
    return dispatch => {
        let lsUsername = localStorage.getItem('username');
        newComment.username = lsUsername ? lsUsername : "testuser";
        return fetch(`${env.REACT_APP_API_URL}/comments`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors',
            body: JSON.stringify(newComment)
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then((res) => {
            console.log("Comment response", res);
            if (!res.success) {
                throw Error(res.msg);
            }
            dispatch(commentPosted(res.data, res.data.videoId));
        }).catch((e) => console.log(e));
    }
}


export function fetchComments(videoId) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/comments/${videoId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            console.log("fetched comments, res:", res);
            dispatch(commentsFetched(res, videoId));
        }).catch((e) => console.log(e));
    }
}