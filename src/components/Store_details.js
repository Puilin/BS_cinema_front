import React, {Component} from 'react';

class Store_details extends Component {
    render() {
        return (
            <div>
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
                                                <li>
                                                    <span class="ion-ios-arrow-right"></span>
                                                    상세정보</li>
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
                                        <a href="">팝콘/음료</a>
                                    </li>
                                    <li>
                                        <a href="#reviews">
                                            관람권
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#media">
                                            굿즈</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div id="" class="tab active">
                                        <div class="row">
                                            <div class="col-md-8 col-sm-12 col-xs-12">
                                                <h3>싱글콤보</h3>
                                                <div class="mvsingle-item ov-item">
                                                    <a
                                                        class="img-lightbox"
                                                        data-fancybox-group="gallery"
                                                        href="images/uploads/image11.jpg"><img src="/images/single.png" alt=""/></a>
                                                    <a href="#" class="redbtn">구매하기</a>
                                                </div>
                                                <div class="title-hd-sm">
                                                    <h4>사용기간</h4>
                                                    <p>구매일로부터 90일</p>
                                                </div>
                                                <div class="title-hd-sm">
                                                    <h4>판매수량</h4>
                                                    <p>1회 8개</p>
                                                </div>
                                                <div class="title-hd-sm">
                                                    <h4>구매취소</h4>
                                                    <p>구매일로부터 7일 이내 취소 가능</p>
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

export default Store_details;