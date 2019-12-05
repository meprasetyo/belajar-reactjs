import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className="callout headcolor" id="Header">
				<div className="row column">
					<a href="/"><h1 id="title">.:: {this.props.name} ::.</h1></a>
				</div>
			</div>
		);
	}
}
export default Header;