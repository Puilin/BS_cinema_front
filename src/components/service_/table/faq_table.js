import React, {Component} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Faq_table extends Component {
    render() {

        return (
            <TableRow>
                <TableCell
                    style={{
                        textAlign: "center"
                    }}>{this.props.id}</TableCell>
                <TableCell
                style={{
                        textAlign: "center"
                    }}>{this.props.name}</TableCell>
                <TableCell
                style={{
                        textAlign: "center"
                    }}>{this.props.date}</TableCell>
            
            </TableRow>
        )
    }
}

export default Faq_table;