import React, { Component } from 'react';
import Navbar from './Navbar';
import Search from './index_/search_bar';
import Content from './content';

class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_logined: false,
            page: "main",
        }
    }
    render() {
        return (
            <div>
            <header class="ht-header">
      <div class="container">
        <Navbar onChangePage={function(code){
            this.setState({
                page: code,
            });
        }.bind(this)}></Navbar>
        <Search page={this.state.page}></Search>
      </div>
    </header>
    <Content page={this.state.page}></Content>
    </div>
        );
    }
}

export default Frame;