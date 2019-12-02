import React, { Component } from 'react';

import './TabelData.css';

import './css/jquery.dataTables.css';

const $ = require('jquery');
$.Datatable = require('datatables.net');

//import TimeAgo from 'react-timeago';
class DataTabelData extends Component {
	constructor(props) {
		super(props);
	}



	render() {
		let data = this.props.karyawanData

	//	let data1 = data[''].nama;
		console.log(data);
	/*	console.log(data);
		this.$el = $(this.el)

		var table = this.$el.DataTable(
			{
				data : this.props.karyawanData,
				searchable: false,
				orderable: false,
				targets: 0,
			}
			
		)

		table.on ( 'order.dt search.dt', function () {
			table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
				cell.innerHTML = i+1;
			} );
		} ).draw();

*/

		var table = $('#example').DataTable({
			data : data,
			searchable: false,
			orderable: false,
			targets: 1,
			columnDefs: [ {
				order: [[ 2, "asc" ]],
				processing: true,
				serverSide: true,
				},     
				{
				searchable: false,
				orderable: false,
				targets: -1,
				data: null,
				defaultContent: "<center><button class='btn btn-success btn-xs tblEdit' type='submit' data-toggle='modal' data-target='#edit_data_Modal'>Edit Data</button>  <button class='btn btn-danger btn-xs hapus-data'>Hapus Data</button></center>"
				} ]
		});

		table.on ( 'order.dt search.dt', function () {
			table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
				cell.innerHTML = i+1;
			} );
		} ).draw();

		
		return (
			<table border="1" id="example" className="display" width="100%" ref={el => this.el = el }>
				<thead id="thead">
					<tr>
						<th><center>No</center></th>
						<th><center>No KTP</center></th>
						<th><center>Nama</center></th>
						<th><center>No HP</center></th>
						<th><center>Action</center></th>
					</tr>
					
				</thead>
				<tbody></tbody>
			
			</table>
		)
	}
}

export default DataTabelData;