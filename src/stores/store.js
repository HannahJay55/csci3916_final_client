import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from "../reducers/authReducer";
import videoReducer from "../reducers/videoReducer";
import commentReducer from "../reducers/commentReducer";
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
}

const store = createStore(
    combineReducers( {
        auth: authReducer,
        video: videoReducer,
        comment: commentReducer
    }),
    applyMiddleware(
        ...middlewares
    )
);

export default store;