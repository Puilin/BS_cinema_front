import React, { Component } from 'react';
import TheaterItem from './theater_/theater_item';

class Theater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus : "seoul",
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
                <div class="page-single movie_list">
	    <div class="container">
		<div class="row ipad-width2">
			<div class="col-md-8 col-sm-12 col-xs-12">
				<div class="topbar-filter">
					<p>전국 상영관 수 <span>325</span> </p>
					<label>분류</label>
					<select
                        defaultValue="seoul"
                        onChange={this.handleChange}
                    >
                            <option value="seoul">서울</option>
                            <option value="gyeonggi">경기</option>
                            <option value="incheon">인천</option>
                            <option value="gangwon">강원</option>
                            <option value="daegu">대구/충청/세종</option>
                            <option value="busan">부산/대구/경상</option>
                            <option value="gwanju">광주/전라</option>
					</select>
					<a href="movielist_light.html" class="list"><i class="ion-ios-list-outline active"></i></a>
					<a  href="moviegrid_light.html" class="grid"><i class="ion-grid"></i></a>
				</div>
				<TheaterItem data={this.state.data} focus={this.state.focus}></TheaterItem>
			</div>
			<div class="col-md-4 col-sm-12 col-xs-12">
				<div class="sidebar">
					<div class="searh-form">
						<h4 class="sb-title">Search for movie</h4>
						<form class="form-style-1" action="#">
							<div class="row">
								<div class="col-md-12 form-it">
									<label>Movie name</label>
									<input type="text" placeholder="Enter keywords"></input>
								</div>
								<div class="col-md-12 form-it">
									<label>Genres & Subgenres</label>
									<div class="group-ip">
										<select
											name="skills" multiple="" class="ui fluid dropdown">
											<option value="">Enter to filter genres</option>
											<option value="Action1">Action 1</option>
					                        <option value="Action2">Action 2</option>
					                        <option value="Action3">Action 3</option>
					                        <option value="Action4">Action 4</option>
					                        <option value="Action5">Action 5</option>
										</select>
									</div>
									
								</div>
								<div class="col-md-12 form-it">
									<label>Rating Range</label>
									
									 <select>
										<option value="range">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
									</select>
									
								</div>
								<div class="col-md-12 form-it">
									<label>Release Year</label>
									<div class="row">
										<div class="col-md-6">
											<select>
												<option value="range">From</option>
												<option value="number">10</option>
												<option value="number">20</option>
												<option value="number">30</option>
											</select>
										</div>
										<div class="col-md-6">
											<select>
												<option value="range">To</option>
												<option value="number">20</option>
												<option value="number">30</option>
												<option value="number">40</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-12 ">
									<input class="submit" type="submit" value="submit"></input>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
                </div>
		    </div>
        )
    }
}

export default Theater;