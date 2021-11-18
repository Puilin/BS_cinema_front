import React, { Component } from 'react';
import Theater_Contents from './theater_/theater_contents';

class Theater extends Component {
    constructor(props) {
        super(props);
        this.state = {
			page : "list",
            focus : "seoul",
			selected_item : "null",
            data : {
                seoul: [
                    {
                        name : "강남점",
                        desc : "서울의 중심에 서다",
                        seat : 580,
                    },
                    {
                        name : "이태원점",
                        desc : "젊음의 도시",
                        seat : 610,
                    },
                ],
                gyeonggi: [
                    {
                        name : "안산점",
                        desc : "하냥이의 고향",
                        seat : 420,
                    },
                ],
            }    
        }
    }

    handleChange = (event) => {
        this.setState({
            focus: event.target.value,
        });
    };

    render() {
        return (
            <div class="buster-light">
                <div class="hero common-hero">
	                <div class="container">
		                <div class="row">
			                <div class="col-md-12">
				                <div class="hero-ct">
					                <h1> 전체 극장</h1>
					                <ul class="breadcumb">
						                <li class="active"><a href="index.html">홈</a></li>
						                <li> <span class="ion-ios-arrow-right"></span> 전체 극장</li>
					                </ul>
				                </div>
			                </div>
		                </div>
	                </div>
                </div>
                <Theater_Contents page={this.state.page} focus={this.state.focus} data={this.state.data} handleChange={this.handleChange}></Theater_Contents>
		    </div>
        )
    }
}

export default Theater;