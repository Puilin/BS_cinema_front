import React, {Component} from 'react';
import Faq from './faq';
import Notice from './notice';
import Inquiry from './Inquiry';
import Lent from './lent';
import Lost from './Lost';
// import Goods from './goods';
// import Store_details from './Store_details';

class Service_content extends Component {
  render(){
    
    // if (this.props.in_detail) {
    //   return(<Store_details></Store_details>);
    // }
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