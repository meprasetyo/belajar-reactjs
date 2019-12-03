import React, { Component } from 'react';

import './percobaan1.css';
import './css/jquery.dataTables.css';

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class percobaan1 extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(this.el);
		this.$el = $(this.el)
		this.$el.DataTable(
			{
				data: this.props.data,
				columns: [
					{ title: "Name" },
					{ title: "Position" },
					{ title: "Office" },
					{ title: "Extn." },
					{ title: "Start date" },
					{ title: "Salary" },
				]
			}
		)
	}

	componentWillMount() {

	}

	render() {
		return (
			<div>
				<table className="display" width="100%" ref={el => this.el = el} >

				</table>
			</div>
		);
	}

}