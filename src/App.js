import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import VideoList from "./components/videolist";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <HashRouter>
          <VideoList/>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
