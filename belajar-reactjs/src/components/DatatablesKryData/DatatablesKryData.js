import React, { Component } from 'react';
import Linkify from 'react-linkify';
import './DatatablesKryData.css';
import DataTable from 'react-data-table-component';

	const columns = [
	/*	{
			name: 'ID',
			selector: 'id_karyawan',
			cell: row => <div>	
								
						</div>,
		}, */
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
		{
			name: 'Aksi Hapus',
			selector: 'id_karyawan',
			cell: row => <div>	
							<button id="del" className="button small btn-color">
							<i className="fa fa-user-times" aria-hidden="true"></i>
								Hapus Data
							</button>
						</div>,
		},
		{
			name: 'Aksi Edit',
			selector: 'id_karyawan',
			cell: row => <div>	
							<button id="del" className="button small btn-color2">
							<i className="fa fa-user-times" aria-hidden="true"></i>
								Ubah Data
							</button>
						</div>,
		},
	];

	export default class DatatablesKryData extends Component {
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

