import constants from '../constants/actionTypes'

let initialState = {
    videos: [],
    selectedVideo: null
}

const videoReducer = (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch(action.type) {
        case constants.FETCH_VIDEOS:
            updated['videos'] = action.videos;
            updated['selectedVideo'] = action.videos[0];
            return updated;
        case constants.SET_VIDEO:
            console.log("SET VIDEO WITH SELECTED VIDEO:" + action.selectedVideo);
            updated['selectedVideo'] = action.selectedVideo;
            return updated;
        default:
            return state;
    }
}

export default videoReducer;