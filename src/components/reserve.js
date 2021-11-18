import React, { Component } from 'react';
import Step1 from './reserve_/step1';

class Reserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step : 1,
            data : [
                {
                    id: 0,
                    name: "이터널스",                    
                },
                {
                    id: 1,
                    name: "베놈2",
                },
                {
                    id: 2,
                    name: "어바웃타임",
                }
            ]
        };
    }

    render() {
        return (
            <div class="buster-light">
                <div class="hero common-hero">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="hero-ct">
                                    <h1> 예매</h1>
                                    <ul class="breadcumb">
                                        <li class="active"><a href="index.html">홈</a></li>
                                        <li> <span class="ion-ios-arrow-right"></span> 예매</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
	    
                <Step1 step={this.state.step} data={this.state.data} />
	</div>
        );
    }
}

export default Reserve;