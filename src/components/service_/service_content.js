import React, {Component} from 'react';
import Faq from './faq';
import Notice from './notice';
import Inquiry from './Inquiry';
import Lent from './lent';
import Lost from './Lost';
import Form from './form';
import Faq_1 from './faq/faq_1';

class Service_content extends Component {
  render(){
    if (this.props.in_detail) {
      return (<Faq_1 faq_id={this.props.faq_id} data={this.props.data}></Faq_1>);
    }
    else if (this.props.tab === "FAQ") {
      return (<Faq onChangeDetail={this.props.onChangeDetail} upData={this.props.upData}></Faq>);
    }
    else if(this.props.tab === "Notice"){
      return(<Notice></Notice>)
    }
    else if(this.props.tab === "Inquiry"){
      return(<Inquiry></Inquiry>)
    }
    else if(this.props.tab === "Lent"){
      return(<Lent></Lent>)
    }
    else if(this.props.tab === "Lost"){
      return(<Lost onChangeDetail={this.props.onChangeDetail}></Lost>)
    }
    else if (this.props.tab === "Lost_form") {
      return (<Form></Form>)
    }
  }
}

export default Service_content;