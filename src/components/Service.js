import React, {Component} from 'react';

class Service extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tab : "FAQ",
            in_detail : false,
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
                                        <h1 width="100px">고객센터</h1>
                                        <ul class="breadcumb">
                                            <li class="active">
                                                <a href="#">홈</a>
                                            </li>
                                            <li>
                                                <span class="ion-ios-arrow-right"></span>
                                                고객센터</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="movie-tabs">
                        <div class="tabs">
                            <ul class="tab-links tabs-mv">
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "faq",
                                        });
                                    }.bind(this)}>FAQ</a>
                                </li>
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "notice",
                                        });
                                    }.bind(this)}>공지사항</a>
                                </li>
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "inquiry",
                                        });
                                    }.bind(this)}>단체관람/대관문의</a>
                                </li>
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "lost",
                                        });
                                    }.bind(this)}>분실물문의</a>
                                </li>
                                <li>
                                <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "goods",
                                        });
                                    }.bind(this)}></a>
                                </li>
                            </ul>
                            <Store_Content tab={this.state.tab} in_detail={this.state.in_detail} onChangeDetail={function(e){
                                var det = this.state.in_detail;
                                this.setState({
                                    in_detail : !det
                                });
                            }.bind(this)}></Store_Content>
                        </div>
                    </div>
                </div>
                
            </div>       
    )
  }
}

export default Service;