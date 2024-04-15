import constants from '../constants/actionTypes'

let initialState = {
      movies: [],
      selectedMovie: null
}

const movieReducer = (state = initialState, action) => {
      let updated = Object.assign({}, state);

      switch(action.type) {
            case constants.FETCH_MOVIES:
                  updated['movies'] = action.movies;
                  updated['selectedMovie'] = action.movies[0];
                  return updated;
            case constants.SET_MOVIE:
                  console.log("SET MOVIE WITH SELECTED MOVIE:" + action.selectedMovie);
                  updated['selectedMovie'] = action.selectedMovie;
                  return updated;
            case constants.FETCH_MOVIE:
                  updated['selectedMovie'] = action.selectedMovie[0];
                  return updated;
            case constants.POST_REVIEW:
                  /*Not sufficient to just clone the state object here, redux checks
                    for referential equality on selected movie too, and
                    decides not to update if it's the same*/
                  updated['selectedMovie'] = Object.assign({}, updated['selectedMovie']);
                  updated['selectedMovie'].reviewDetails.push(action.newReview);
                  return updated;
            default:
                  return state;
      }
}

export default movieReducer;