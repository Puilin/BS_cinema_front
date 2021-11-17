import { Component } from 'react';
import Calendar from './Calendar';

class Content extends Component {
    render() {
      if (this.props.page === "Calendar") {
        return (<Calendar></Calendar>);
      // } else if (this.props.page === "movie") {
      //   return (<Movie onChangePage={this.props.onChangePage}></Movie>);
      // } else if (this.props.page === "theater") {
      //   return (<Theater></Theater>);
      // } else if (this.props.page === "store") {
      //   return (<Store></Store>);
      // } else if (this.props.page === "mypage") {
      //   return (<MyPage></MyPage>);
      // } else if (this.props.page === "service") {
      //   return (<Service_Center></Service_Center>);
      // } else if (this.props.page === "movie_detail") {
      //   return (<MovieDetail></MovieDetail>);
      }
    }
}


export default Content;