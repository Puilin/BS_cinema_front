import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Frame from './components/frame';
import Movieinfo from './components/index_/movieinfo';
import NoticeInfo from './components/index_/noticeinfo';
import reportWebVitals from './reportWebVitals';
import Movie_slider from './components/index_/Slider_movieitem';

ReactDOM.render(
  <React.StrictMode>
  <Frame></Frame>
  </React.StrictMode>,
  document.getElementById('frame')
);

ReactDOM.render(
  <React.StrictMode>
  <Movie_slider></Movie_slider>
  </React.StrictMode>,
  document.getElementById('movieitem-slider')
);

ReactDOM.render(
  <React.StrictMode>
  <Movieinfo></Movieinfo>
  </React.StrictMode>,
  document.getElementById('movie-info')
);

ReactDOM.render(
  <React.StrictMode>
  <NoticeInfo></NoticeInfo>
  </React.StrictMode>,
  document.getElementById('notice-info')
);

ReactDOM.render(
  <React.StrictMode>
  <App></App>
  </React.StrictMode>,
  document.getElementById('event-info')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
