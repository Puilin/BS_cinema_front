import React, {Component} from 'react';
import Snack from './snack';
import Ticket from './ticket';
import Product from './product';
import Single from './single';
import Double from './double';

class Store_Content extends Component {
  render(){
    if (this.props.in_detail) {
      return(<Single></Single>);
    }
    else if (this.props.in_detail) {
      return(<Double></Double>);
    }
    else if (this.props.tab === "snack") {
      return (<Snack onChangeDetail={this.props.onChangeDetail}></Snack>);
    }
    else if(this.props.tab === "ticket"){
      return(<Ticket onChangeDetail={this.props.onChangeDetail}></Ticket>)
    }
    else if(this.props.tab === "product"){
      return(<Product onChangeDetail={this.props.onChangeDetail}></Product>)
    }
  }
}

export default Store_Content;