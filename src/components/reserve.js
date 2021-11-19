import React, { Component } from 'react';
import Step1 from './reserve_/step1';
import Step2 from './reserve_/step2';

class Reserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            ],
            selected_items : []
        };
    }

    getItems = (arr) => {
        var items = arr;
        this.setState({
            selected_items : items,
        });
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
	    
                <Step1 data={this.state.data} getItems={this.getItems} selected_items={this.state.selected_items}/>
                <Step2 selected_items={this.state.selected_items}></Step2>
	</div>
        );
    }
}

export default Reserve;