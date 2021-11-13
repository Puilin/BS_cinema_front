import React, { Component } from 'react';
import {  Link  } from 'react-router-dom';
import './Tab'

class Store extends Component{
  function Tabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            팝콘/음료
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            관람권
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            굿즈
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Content 1</h2>
            <hr />
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Content 2</h2>
            <hr />
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>Content 3</h2>
            <hr />
          </div>
        </div>
      </div>
    );
  }
  render(){
    return(
      <div>
      <div class="buster-light">
      <div class="hero common-hero">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-ct">
                <h1 width="100px">스토어</h1>
                <ul class="breadcumb">
                  <li class="active"><a href="#">홈</a></li>
                  <li><span class="ion-ios-arrow-right"></span> 스토어</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <Tabs></Tabs>

        <Link to = "./Tab.js">
        <button onClick={this}>팝콘/음료</button>
        </Link>
        <button>관람권</button>
        <button>굿즈</button>
        </div>
      <div>
      <div class="page-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="flex-wrap-movielist mv-grid-fw">
                <div class="movie-item-style-2 movie-item-style-1">
                  <img src="images/uploads/mv1.jpg" alt="" />
                  <div class="hvr-inner">
                    <a href="moviesingle.html">
                      상세정보 <i class="ion-android-arrow-dropright"></i>
                    </a>
                  </div>
                  <div class="mv-item-infor">
                    <h6><a href="#">싱글콤보</a></h6>
                  </div>
                </div>
                <div class="movie-item-style-2 movie-item-style-1">
                  <img src="images/uploads/mv2.jpg" alt="" />
                  <div class="hvr-inner">
                    <a href="moviesingle.html">
                      상세정보 <i class="ion-android-arrow-dropright"></i>
                    </a>
                  </div>
                  <div class="mv-item-infor">
                    <h6><a href="#">더블콤보</a></h6>
                      <span>팝콘(L) 1 + 탄산음료(R) 1</span>
                  </div>
                </div>
                <div class="movie-item-style-2 movie-item-style-1">
                  <img src="images/uploads/mv-item3.jpg" alt="" />
                  <div class="hvr-inner">
                    <a href="moviesingle.html">
                      상세정보 <i class="ion-android-arrow-dropright"></i>
                    </a>
                  </div>
                  <div class="mv-item-infor">
                    <h6><a href="#">Die hard</a></h6>
                    <p class="rate">
                      <i class="ion-android-star"></i><span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div class="movie-item-style-2 movie-item-style-1">
                  <img src="images/uploads/mv-item4.jpg" alt="" />
                  <div class="hvr-inner">
                    <a href="moviesingle.html">
                      상세정보 <i class="ion-android-arrow-dropright"></i>
                    </a>
                  </div>
                  <div class="mv-item-infor">
                    <h6><a href="#">The walk</a></h6>
                    <p class="rate">
                      <i class="ion-android-star"></i><span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div class="movie-item-style-2 movie-item-style-1">
                  <img src="images/uploads/mv3.jpg" alt="" />
                  <div class="hvr-inner">
                  <a href="moviesingle.html">
                      상세정보 <i class="ion-android-arrow-dropright"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  
);}
      
      
export default Store;