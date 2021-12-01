import React, { Component } from 'react';
import {  getYear  } from 'date-fns';
import ReactDatePicker, { registerLocale  } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
registerLocale('ko',ko);
const _ = require('lodash');

class DatePicker extends Component{
  constructor(props){
    super(props);
    this.state={
      startDate: new Date(),
    }
  }
  render(){
    const years = _.range(1990, getYear(new Date()+1,1));
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return(
      <div>
        <DatePicker
        locale="ko"
        showPopperArrow={false}
        fixedHeight
        selected={this.state.startDate}
        onChange={(date)=>
        this.setState({
          startDate: date,
        })
      }
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      })=>(
        <div className="date-customheader">
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            <i className="icon-arrow-left32" />
            </button>
            <div className="custom-month">{date.getFullYear()}년{months[date.getMonth()]}</div>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <i className="icon-arrow-right32"/>
            </button>
        </div>
      )}
      />
      </div>
    )
      
  }
}

export default DatePicker;