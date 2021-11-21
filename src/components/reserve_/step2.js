import { Component } from 'react';
import Reserve_Moviegrid from './reserve_moviegrid';

class Step2 extends Component {
    checkAllItemsAreFilled() {
        // need to implement later
    }

    render() {
        var items = this.props.selected_items; // arr
        var arr = []
        var names = []
        for (const item of items) {
            arr.push(
                <div class="movie-item-style-2">
                <img src="images/uploads/mv1.jpg" alt=""></img>
                <div class="mv-item-infor">
                    <h6>{item.name}</h6>
                    <p class="describe"></p>
                    <p class="seats">12 석</p>
                </div>
			</div>
            );
            names.push(item.name + " ")
        }
        return (
            <div class="container">
                <div class="col-md-16 col-sm-12 col-xs-12">
                <br /><br />
                <h3> Step.2 극장 선택</h3>
                <br/><br/>                
                <div class="searh-form">						
						<form class="form-style-1" action="#">
							<div class="row">
								<div class="col-md-12 form-it">
									<label>영화 이름</label>
									<p>{names}</p>
								</div>
								<div class="col-md-12 form-it">
									<label>지역 선택</label>
									<div class="group-ip">
										<select
											name="province" multiple="" class="ui fluid dropdown">
											<option value="">--지역을 선택하세요--</option>
											<option value="seoul">서울</option>
											<option value="gyeonggi">경기</option>
											<option value="incheon">인천</option>
											<option value="gangwon">강원</option>
											<option value="daegu">대구/충청/세종</option>
											<option value="busan">부산/대구/경상</option>
											<option value="gwanju">광주/전라</option>
										</select>
									</div>
									
								</div>
								<div class="col-md-12 form-it">
									<label>영화관 선택</label>
									
									 <select>
									 	<option value="">-- 영화관을 선택하세요 --</option>
										<option value="range">강남점</option>
										<option value="saab">이태원점</option>
									</select>
									
								</div>
								<div class="col-md-12 form-it">
									<label>관람일 선택</label>
									<form>
										<p><input id="datefield" type="date"></input></p>
									</form>
								</div>
								<div class="col-md-12 ">
									<input class="submit" type="submit" value="submit" onClick={function(e){
                                        e.preventDefault();
                                        this.props.toStep3();
                                    }.bind(this)}></input>
								</div>
							</div>
						</form>
					</div>
                    <button class="refresh_btn">새로고침</button>
                    </div>
                {arr}
            </div>
        );
    }
}

export default Step2;