import { Component } from 'react';
import Main_A from './main_before_login';
import Movie from './movie';
import Store from './store';
import Theater from './theater';
import MyPage from './my_page';

class Content extends Component {
    render() {
      if (this.props.page === "main") {
        return (<Main_A></Main_A>);
      } else if (this.props.page === "movie") {
        return (<Movie></Movie>);
      } else if (this.props.page === "theater") {
        return (<Theater></Theater>);
      } else if (this.props.page === "store") {
        return (<Store></Store>);
      } else if (this.props.page === "mypage") {
        return (<MyPage></MyPage>);
      }
    }
}

export default Content;