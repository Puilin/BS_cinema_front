import React, {Component} from 'react';
import Faq from './faq';
import Notice from './notice';
import Inquiry from './Inquiry';
import Submit_sucess from './submit_sucess';

class Service_content extends Component {
  render(){
    if (this.props.tab === "FAQ") {
      return (<Faq></Faq>);
    }
    else if(this.props.tab === "Notice"){
      return(<Notice></Notice>)
    }
    else if(this.props.tab === "Inquiry"){
      return(<Inquiry onChangeTab={this.props.onChangeTab} inquiry_data={this.props.inquiry_data} addInquiryData={this.props.addInquiryData}></Inquiry>)
    }
    else if (this.props.tab === "submit_sucess") {
      return (<Submit_sucess onChangePage={this.props.onChangePage}/>);
    }
  }
}

export default Service_content;