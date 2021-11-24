import React, {Component} from 'react';
import Admin_content from './admin_content';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: "sales",
            in_detail: false
        }
    }
    render() {
        return (
            <div>
                <div class="buster-light">
                    <div class="hero common-hero">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hero-ct">
                                        <h1 width="100px">관리자 페이지</h1>
                                        <ul class="breadcumb">
                                            <li class="active">
                                                <a href="#">홈</a>
                                            </li>
                                            <li>
                                                <span class="ion-ios-arrow-right"></span>
                                                관리자</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="movie-tabs">
                    <div class="tabs">
                        <ul class="tab-links tabs-mv">
                            <li>
                                <a
                                    href="#overview"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        this.setState({tab: "sales", in_detail: false});
                                    }.bind(this)}>매출현황</a>
                            </li>
                            <li>
                                <a
                                    href="#overview"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        this.setState({tab: "pay", in_detail: false});
                                    }.bind(this)}>급여 관리</a>
                            </li>
                            <li>
                                <a
                                    href="#overview"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        this.setState({tab: "benefit_analysis", in_detail: false});
                                    }.bind(this)}>수익 분석</a>
                            </li>
                            <li>
                                <a
                                    href="#overview"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        this.setState({tab: "board", in_detail: false});
                                    }.bind(this)}>게시판 관리</a>
                            </li>
                            <li>
                                <a
                                    href="#overview"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        this.setState({tab: "movie", in_detail: false});
                                    }.bind(this)}>영화 정보 관리</a>
                            </li>
                            <li>
                                <a
                                    href="#overview"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        this.setState({tab: "product", in_detail: false});
                                    }.bind(this)}>상품 관리</a>
                            </li>
                        </ul>
                        <Admin_content
                            tab={this.state.tab}
                             
                            ></Admin_content>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;