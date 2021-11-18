import { Component } from 'react';

class MovieItem_Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_selected : false,
        }
    }

    render() {
        return (
            <div>
            <div>
                <input type="checkbox" id={this.props.id} name={this.props.name} onChange={function(){
                    this.setState({
                        is_selected: !this.state.is_selected,
                    });
                    if (this.state.is_selected) {
                        alert(document.getElementById(this.props.id).getAttribute("name") + "해제됨");
                        this.props.removeItem(this.props.id);
                    } else {
                        alert(document.getElementById(this.props.id).getAttribute("name"));
                        this.props.addItem({id:this.props.id, name:this.props.name});
                    }
                }.bind(this)}></input>
            </div>
        </div>
        ); 
    }
}

export default MovieItem_Check;