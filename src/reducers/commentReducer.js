import constants from '../constants/actionTypes'

let initialState = {
    comments: {}
}

const commentReducer = (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch(action.type) {
        case constants.FETCH_COMMENTS:
            console.log("fetched comments:", action.comments);
            updated['comments'][action.videoId] = action.comments;
            return updated;
        case constants.POST_COMMENT:
            console.log("post comment with comment:", action.comment, action.videoId);
            updated['comments'] = Object.assign({}, updated['comments']);
            // https://stackoverflow.com/questions/597588/how-do-you-clone-an-array-of-objects-in-javascript
            updated['comments'][action.videoId] = structuredClone(updated['comments'][action.videoId]);
            updated['comments'][action.videoId].push(action.comment);
            return updated;
        default:
            return state;
    }
}

export default commentReducer;