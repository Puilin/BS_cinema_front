import { Component } from 'react';
import Main_A from './main_before_login';
import Movie from './movie';

class Content extends Component {
    render() {
      if (this.props.page === "main") {
        return (<Main_A></Main_A>);
      } else if (this.props.page === "movie") {
        return (<Movie></Movie>);
      }
    }
}

export default Content;