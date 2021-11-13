import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar'
import Search from './components/search_bar';
import Movieinfo from './components/movieinfo';
import NoticeInfo from './components/noticeinfo';
import reportWebVitals from './reportWebVitals';
import Movie_slider from './components/Slider_movieitem';
import {  BrowserRouter } from 'react-router-dom';
import Movie from './components/Movie';

ReactDOM.render(
  <React.StrictMode>
  <Navbar></Navbar>
  </React.StrictMode>,
  document.getElementById('navb')
);

ReactDOM.render(
  <React.StrictMode>
  <Search></Search>
  </React.StrictMode>,
  document.getElementById('search-bar')
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

// ReactDOM.render(
//   <React.StrictMode>
//   <Movie></Movie>
//   </React.StrictMode>,
//   document.getElementById('movie')
// );

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
