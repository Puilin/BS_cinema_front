import React, { Component } from 'react';
import Admin_login from './admin_login';

class Admin extends Component {
    render() {
        const style_input={
            width: '450px',
            margin: '20px'
        }

        return (
            <div class="buster-light">
                    <div class="hero common-hero">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hero-ct">
                                        <h1 width="100px">관리자 페이지</h1>
                                        <ul class="breadcumb">
                                            <li class="active">
                                                <a href="#">관리자</a>
                                            </li>
                                            <li>
                                                <span class="ion-ios-arrow-right"></span>
                                                로그인</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Admin_login></Admin_login>
                </div>
        );
    }
}

export default Admin;