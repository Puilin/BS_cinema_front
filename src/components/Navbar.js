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
                    window.location.reload(false);
                    window.scrollTo(0, 0);
                  }.bind(this)}>홈</a>
                </li>
                <li class="dropdown first">
                  <a
                    class="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    onClick={function(e){
                          e.preventDefault();
                          this.props.onChangePage("movie");
                          window.scrollTo(0, 0);
                    }.bind(this)}
                  >
                    영화
                  </a>
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
                    onClick={function(e){
                          e.preventDefault();
                          this.props.onChangePage("theater");
                          window.scrollTo(0, 0);
                    }.bind(this)}
                  >극장
                  </a>
                </li>
                <li class="dropdown first">
                <a href="index.html"
                  onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage("store");
                    window.scrollTo(0, 0);
                  }.bind(this)}>
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