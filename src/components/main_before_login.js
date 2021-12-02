import { Component } from 'react';
import Movie_slider from './index_/Slider_movieitem';
import Movieinfo from './index_/movieinfo';
import Event from './index_/Event';
import NoticeInfo from './index_/noticeinfo';

class Main_A extends Component {
    render() {
        return (
            <div>
              <Movie_slider></Movie_slider>
              <div class="movie-items">
                <div class="container">
                  <div class="row ipad-width">
                    <Movieinfo></Movieinfo>
                    <Event></Event>
                  </div>
                </div>
              </div>
              <div class="ads">
                
                
              </div>
              <div class="latestnew">
                <div class="container">
                  <div class="row ipad-width">
                    <NoticeInfo></NoticeInfo>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Main_A;