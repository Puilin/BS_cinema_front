import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-default navbar-custom">
            <div
              class="collapse navbar-collapse flex-parent"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav flex-child-menu menu-left">
                <li class="hidden">
                              <a href="#page-top"></a>
                          </li>
                <li>
                  <a href="index.html"
                  onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage("main");
                  }.bind(this)}>홈</a>
                </li>
                <li class="dropdown first">
                  <a
                    class="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    영화<i class="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul class="dropdown-menu level1">
                    <li><a href="moviegridfw_light.html"
                        onClick={function(e){
                          e.preventDefault();
                          this.props.onChangePage("movie");
                        }.bind(this)}>전체영화</a></li>
                    <li><a href="movielist.html">현재상영작</a></li>
                    <li><a href="moviesingle.html">개봉예정작</a></li>
                  </ul>
                </li>
                <li class="dropdown first">
                  <a
                    class="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    예매 <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul class="dropdown-menu level1">
                    <li><a href="celebritygrid01.html">빠른예매</a></li>
                    <li><a href="celebritygrid02.html">상영시간표 </a></li>
                    <li class="it-last">
                    </li>
                  </ul>
                </li>
                              <li class="dropdown first">
                  <a
                    class="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    극장<i class="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul class="dropdown-menu level1">
                    <li class="dropdown">
                    </li>
                    <li><a href="movielist.html">전체극장</a></li>
                    <li><a href="moviesingle.html">특별관</a></li>
                  </ul>
                </li>
                <li class="dropdown first">
                  <a
                    class="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    스토어</a>
                </li>
              </ul>
              <ul class="nav navbar-nav flex-child-menu menu-left">
                <div
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <div id="nav-icon1"></div>
                </div>
                <a href="index.html"
                  ><img
                    class="logo"
                    src="images/KakaoTalk_20211107_214306088_06.png"
                    alt=""
                    width="140"
                    height="68"
                    
                /></a>
              </ul>
              <ul class="nav navbar-nav flex-child-menu menu-right">
                <li><a href="#">고객센터</a></li>
                <li class="loginLink"><a href="#">로그인</a></li>
                <li class="btn signupLink"><a href="#">회원가입</a></li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default Navbar;