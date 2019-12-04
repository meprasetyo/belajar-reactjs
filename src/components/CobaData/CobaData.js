import React, { Component } from 'react';
import Linkify from 'react-linkify';
import './CobaData.css';
import './css/jquery.dataTables.css';

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class CobaData extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {

		let data = this.setState({data: this.props.data});
	
		console.log(data);
		console.log(this.el);
		this.$el = $(this.el);
		this.$el.DataTable(
			{
				data: this.props.data,
				columns: [
					{ title: "ID" },
					{ title: "Nama" },
					{ title: "Nomor KTP" },
					{ title: "Nomor HP" },
				]
			}
		)
	}

	componentWillMount() {

	}

	render() {
		let data = this.props.data;
		let printData = data;
		console.log(printData);
		let table = $('#exc').dataTable(
			{
				data: printData ,
				columns: [
					{ title: "ID" },
					{ title: "Nama" },
					{ title: "Nomor KTP" },
					{ title: "Nomor HP" },
				],
				searchable: false,
				orderable: false,
				targets: 0,
			}
		);
		console.log(table);

		return (
			<div>
				<table className="display" width="100%" id="exc" >

				</table>
			</div>
		);
	}

}