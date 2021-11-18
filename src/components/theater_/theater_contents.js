import { Component } from 'react';
import List from './list';

class Theater_Contents extends Component {
    render() {
        if (this.props.page === "list") {
            return (<List data={this.props.data} focus={this.props.focus} handleChange={this.props.handleChange}></List>);
        }
        // else if (this.props.page === "detail") {
        //     return;
        // }
    }
}

export default Theater_Contents;