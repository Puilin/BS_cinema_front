import React, {Component} from 'react';

class Store extends Component {
    render() {
        return (
            <div>
                <div class="buster-light">
                    <div class="hero common-hero">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hero-ct">
                                        <h1 width="100px">스토어</h1>
                                        <ul class="breadcumb">
                                            <li class="active">
                                                <a href="#">홈</a>
                                            </li>
                                            <li>
                                                <span class="ion-ios-arrow-right"></span>
                                                스토어</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="movie-tabs">
                        <div class="tabs">
                            <ul class="tab-links tabs-mv">
                                <li class="active">
                                    <a href="#overview">팝콘/음료</a>
                                </li>
                                <li>
                                    <a href="#overview">
                                        관람권
                                    </a>
                                </li>
                                <li>
                                    <a href="#overview">
                                        굿즈</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="overview" class="tab active">
                                    <div class="row">
                                        <div class="col-md-8 col-sm-12 col-xs-12">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                                        <h3>팝콘/음료</h3>
                                                        <div class="flex-wrap-movielist mv-grid-fw">
                                                            <div class="movie-item-style-2 movie-item-style-1">
                                                                <img src="/images/single.png" alt=""/>
                                                                <div class="hvr-inner">
                                                                    <a
                                                                        href="index.html"
                                                                        onClick={function (e) {
                                                                            e.preventDefault();
                                                                            this
                                                                                .props
                                                                                .onChangePage("store_details");
                                                                            window.scrollTo(0, 0);
                                                                        }.bind(this)}>
                                                                        상세정보
                                                                        <i class="ion-android-arrow-dropright"></i>
                                                                    </a>
                                                                </div>
                                                                <div class="mv-item-infor">
                                                                    <h6>
                                                                        <a href="#">싱글콤보</a>
                                                                    </h6>
                                                                    <span>팝콘(L) 1 + 탄산음료(R) 2</span>
                                                                </div>
                                                            </div>
                                                            <div class="movie-item-style-2 movie-item-style-1">
                                                                <img src="/images/double.png" alt=""/>
                                                                <div class="hvr-inner">
                                                                    <a
                                                                        href="index.html"
                                                                        onClick={function (e) {
                                                                            e.preventDefault();
                                                                            this
                                                                                .props
                                                                                .onChangePage("store_details");
                                                                        }.bind(this)}>
                                                                        상세정보
                                                                        <i class="ion-android-arrow-dropright"></i>
                                                                    </a>
                                                                </div>
                                                                <div class="mv-item-infor">
                                                                    <h6>
                                                                        <a href="#">더블콤보</a>
                                                                    </h6>
                                                                    <span>팝콘(L) 2 + 탄산음료(R) 2</span>
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
                        </div>
                    </div>
                </div>
                <div class="tab-content">
                    <div id="overview" class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>관람권</h3>
                                            <div class="flex-wrap-movielist mv-grid-fw">
                                                <div class="movie-item-style-2 movie-item-style-1">
                                                    <img src="/images/single.png" alt=""/>
                                                    <div class="hvr-inner"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="overview" class="tab-content">
                    <div class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>굿즈</h3>
                                            <div class="flex-wrap-movielist mv-grid-fw">
                                                <div class="movie-item-style-2 movie-item-style-1">
                                                    <img src="/images/single.png" alt=""/>
                                                    <div class="hvr-inner"></div>
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
    }
}

export default Store;