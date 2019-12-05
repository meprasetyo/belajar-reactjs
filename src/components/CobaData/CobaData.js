import React, { Component } from 'react';
import Linkify from 'react-linkify';
import './CobaData.css';
import DataTable from 'react-data-table-component';





	const columns = [
		{
			name: 'ID',
			selector: 'id_karyawan'
		},
		{
			name: 'Nama',
			selector: 'nama'
		},
		{
			name: 'Nomor KTP',
			selector: 'KTP'
		},
		{
			name: 'Nomor HP',
			selector: 'no_hp'
		},
	];

	export default class CobaData extends Component {
	render() {
		let data = this.props.data;
		return (
			<DataTable
				title="Tabel Data Karyawan"
				columns={columns}
				data={data}
			/>
		);
	}
}

