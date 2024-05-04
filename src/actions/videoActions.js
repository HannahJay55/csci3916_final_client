import actionTypes from '../constants/actionTypes';
//import runtimeEnv from '@mars/heroku-js-runtime-env'
const env = process.env;

function videosFetched(videos) {
    return {
        type: actionTypes.FETCH_VIDEOS,
        videos: videos
    }
}

function videoSet(video) {
    return {
        type: actionTypes.SET_VIDEO,
        selectedVideo: video
    }
}

export function setVideo(video) {
    return dispatch => {
        dispatch(videoSet(video));
    }
}

export function fetchVideos() {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/video`, {
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
            dispatch(videosFetched(res));
        }).catch((e) => console.log(e));
    }
}