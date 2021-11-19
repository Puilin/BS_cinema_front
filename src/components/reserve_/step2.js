import { Component } from 'react';
import Reserve_Moviegrid from './reserve_moviegrid';

class Step2 extends Component {
    render() {
        var items = this.props.selected_items; // arr
        
        var arr = []
        for (const item of items) {
            arr.push(<div>{item}</div>)
        }
        return (
            <div class="container">
                <div class="col-md-12 col-sm-12 col-xs-12">
                <br /><br />
                <h3> Step.2 영화 선택</h3>
                </div>
                {arr}
            </div>
        );
    }
}

export default Step2;