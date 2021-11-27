import React, {Component} from 'react';

class Faq_1 extends Component {
    render() {
        return (
            <div class="tab-content">
                <div>
                    <div id="overview" class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>FAQ</h3>
                                            <div class="flex-wrap-movielist mv-grid-fw"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <br/>
                    <div class="title-hd-sm">
                        <h4>{this.props.data[this.props.faq_id + 1].id}</h4>
                        <h4>{this.props.data[this.props.faq_id + 1].name}</h4>
                        <h4>{this.props.data[this.props.faq_id + 1].date}</h4>
                    </div>
                    <br/>
                    <span>밤새시네마의 정식 오픈 날짜는 12월 3일입니다!</span>
                    <br /><span>많은 애용 부탁드립니다~</span>

                </div>
            </div>
        )
    }
}

export default Faq_1;