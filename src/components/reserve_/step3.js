import { Component } from 'react';

class Step3 extends Component {
    render() {
        return (
            <div class="container">
                <div class="col-md-12 col-sm-12 col-xs-12">
                <br /><br />
                <h3> Step.3 인원 선택</h3>
                <br /><br />
                <div class="searh-form">						
						<form class="form-style-1" action="#">
							<div class="row">
								<div class="col-md-6 form-it">
									<label>구분</label>
									<div class="group-ip">
										<select
											name="province" multiple="" class="ui fluid dropdown">
											<option value="">--그룹을 선택하세요--</option>
											<option value="adult">성인</option>
											<option value="youth">청소년</option>
											<option value="children">어린이</option>
                                            <option value="welfare">국가유공자/사회적 약자</option>
										</select>
									</div>
									
								</div>
								<div class="col-md-6 form-it">
									<label>인원수</label>
									
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
                </div>
            </div>
        );
    }
}

export default Step3;