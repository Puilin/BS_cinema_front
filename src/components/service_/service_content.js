import React, {Component} from 'react';
import Faq from './faq';
import Notice from './notice';
import Inquiry from './Inquiry';
import Lent from './lent';
import Lost from './Lost';

class Service_content extends Component {
  render(){
    if (this.props.tab === "FAQ") {
      return (<Faq></Faq>);
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
      return(<Lost></Lost>)
    }
   }
}

export default Service_content;