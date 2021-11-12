import { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
            <div id="movieitem-slider"></div>
      <div class="movie-items">
        <div class="container">
          <div class="row ipad-width">
            <div id="movie-info">
            </div>
            <div id="event-info"></div>  
          </div>
        </div>
        <div class="ads">
          <img
            src="images/uploads/ads2.png"
            alt=""
            width="309"
            height="45"
          />
        </div>
        <div class="latestnew">
          <div class="container">
            <div class="row ipad-width">
              <div id="notice-info"></div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="sidebar"></div>
            </div>
          </div>
          </div>
        );
    }
}

export default Content;