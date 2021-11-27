import React, {Component} from 'react';
import Faq from './faq';
import Notice from './notice';
import Inquiry from './Inquiry';
import Lent from './lent';
import Lost from './Lost';
import Form from './form';
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
      return(<Inquiry onChangeTab={this.props.onChangeTab}></Inquiry>)
    }
    else if(this.props.tab === "Lent"){
      return(<Lent></Lent>)
    }
    else if(this.props.tab === "Lost"){
      return(<Lost onChangeTab={this.props.onChangeTab}></Lost>)
    }
    else if (this.props.tab === "Lost_form") {
      return (<Form></Form>)
    }
    else if (this.props.tab === "submit_sucess") {
      return (<Submit_sucess/>);
    }
  }
}

export default Service_content;