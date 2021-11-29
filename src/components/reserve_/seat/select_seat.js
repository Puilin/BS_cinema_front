import { Component } from 'react';
import Row from './row';

class Select_seat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : [],
        };
    }

    iter_columns() {
        var ths = [];
        for (var i=65; i<74; i++) {
            var char = String.fromCharCode(i);
            ths.push(<th style={{textAlign:"center",}}>{char}</th>)
        }
        return ths;
    }

    iter_rows() {
        var rows = [];
        for (var i=1; i<11; i++) {
            rows.push(<Row key={i} row_no={i} sendData={function(data){
                var arr = this.state.selected;
                arr.push(data);
                this.setState({
                    selected : arr,
                });
            }.bind(this)}></Row>);
        }
        return rows;
    }

    render() {
        return (<div>
            <table class="seats">
                {this.iter_columns()}
                {this.iter_rows()}
            </table>
            <div>{Array.join(this.state.selected, ", ")}</div>
            </div>
        );
    }
}

export default Select_seat;