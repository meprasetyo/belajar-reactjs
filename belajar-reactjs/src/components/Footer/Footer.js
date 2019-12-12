import React, { Component } from 'react';
class Footer extends Component {
	render() {
		return (
			<div className="row" id="footer">
				<div className="medium-12 columns" style={{ textAlign:'center'}}>
					<p>Copyright 2019 , <a href="https://purwokerto.azurewebsites.net"> My Website</a></p>
				</div>
			</div>
		);
	}
}
export default Footer;