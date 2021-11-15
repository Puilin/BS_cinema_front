import React, { Component } from 'react';
import Info_view from './info_view';
import Info_edit from './info_edit';
import Change_PW from './change_pw';

class Mp_Content extends Component {
    render() {
		if (this.props.section === "info" && this.props.mode === "view") {
			return (<Info_view onChangeSection={this.props.onChangeSection}></Info_view>);
		} else if (this.props.section === "info" && this.props.mode === "edit") {
			return (<Info_edit onChangeSection={this.props.onChangeSection}></Info_edit>);
		} else if (this.props.section === "change_pw") {
			return (<Change_PW></Change_PW>);
		}
    }
}

export default Mp_Content;