import { Component } from 'react';

class Select_seat extends Component {
    iter_columns() {
        var ths = [];
        for (var i=65; i<74; i++) {
            var char = String.fromCharCode(i);
            ths.push(<th>{char}</th>)
        }
        return ths;
    }
    render() {
        return (
            <table class="seats">
                {this.iter_columns()}
            </table>
        );
    }
}

export default Select_seat;