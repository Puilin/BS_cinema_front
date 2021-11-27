import { Checkbox } from '@material-ui/core';
import React, {Component} from 'react';

class Signup extends Component {
    render() {
        const style_input = {
            width: '450px',
            margin: '20px'
        }

        return (
            <div>
                <div class="buster-light">
                    <div class="hero common-hero">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hero-ct">
                                        <h1 width="100px">회원가입</h1>
                                        <ul class="breadcumb">
                                            <li class="active">
                                                <a href="#">홈</a>
                                            </li>
                                            <li>
                                                <span class="ion-ios-arrow-right"></span>
                                                회원가입</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="movie-tabs">
                        <div class="tabs">
                            <ul class="tab-links tabs-mv">
                                <div class="login-wrapper" id="signup-content">
                                    <div class="login-content">
                                        <h3>간편회원가입</h3>
                                        <br/>
                                        <div>
                                            <form method="post" class="form-style-1" action="#">
                                                <div class="row">
                                                    <label style={style_input} for="username-2">
                                                        아이디:
                                                        <input
                                                            type="text"
                                                            name="username"
                                                            class="username-2"
                                                            placeholder="아이디"
                                                            pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                                                            required="required"
                                                            onChange={function(e){
                                                                this.onHandleIDChange(e.target.value);
                                                            }.bind(this)}
                                                            /><div class="redbtn">본인인증</div>
                                                    </label>
                                                </div>
                                                <div class="row">
                                                    <label style={style_input} for="password-2">
                                                        비밀번호:
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            id="password-2"
                                                            placeholder="비밀번호"
                                                            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                                            required="required"
                                                            onChange={function(e){
                                                                this.onHandlePWChange(e.target.value);
                                                            }.bind(this)}
                                                            />
                                                            
                                                    </label>
                                                </div>
                                                <br/>
                                                <div class="row">
                                                    <button style={style_input} class="redbtn" type="submit"
                                                    onClick={function(e){
                                                        e.preventDefault();
                                                        this.onSubmitAccount();
                                                    }.bind(this)}>로그인</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Signup;