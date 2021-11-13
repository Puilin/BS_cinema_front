import React, { Component } from 'react';
import {  Link  } from 'react-router-dom';


class Store extends Component{
  render() {
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
      <section id="movie">
        <div class="container">
            <div class="row">
                <div class="movie">
                    <h2 class="ir_so">영화 예매</h2>
                    <div class="movie_title">
                        <ul>
                            <li class="active"><a href="#">박스오피스</a></li>
                            <li><a href="#">최신개봉작</a></li>
                            <li><a href="#">상영예정작</a></li>
                            <li><a href="#">큐레이션</a></li>
                        </ul>
                    </div>
                    </div>
                    </div>
                    </div>
                    </section>
                    </div>
      <div>
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
    );
  }}
      
      
export default Store;