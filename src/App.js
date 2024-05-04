import React from 'react';
import './App.css';
import MovieHeader from './components/movieheader';
import MovieList from './components/movielist';
import Movie from './components/movie';
import Authentication from './components/authentication';
import {HashRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { fetchVideos } from "./actions/videoActions";
import store from './stores/store';
import Video from './components/video';
import VideoList from "./components/videolist";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <HashRouter>
          <VideoList/>
          {/*
          <div className="app__videos">
            <Video
                url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
                channel="nabendu82"
                description="Macbook Air to new Windows editing beast"
                song="I am a Windows PC"
                likes={345}
                shares={200}
                messages={90}
            />
            <Video
                url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
                channel="thewebdev"
                description="Tuesday morning editing on kdenlive in Windows"
                song="Kdenlive is great"
                likes={445}
                shares={290}
                messages={109}
            />
          </div>
          */}
          {/*
          <div>
            <MovieHeader/>
            <Route exact path="/" render={() => <MovieList/>}/>
            <Route exact path="/movielist" render={() => <MovieList/>}/>
            <Route exact path="/movie/:movieId" render={() => <Movie/>}/>
            <Route path="/signin" render={() => <Authentication/>}/>
          </div>
          */}
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
