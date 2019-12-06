import React, { Component } from 'react';
import Linkify from 'react-linkify';
import './DatatablesKryVersi2Data.css';

import MaterialTable from 'material-table';
import IconButton from '@material-ui/core/IconButton';



export default class DatatablesKryVersi2Data extends Component {
	render() {
		let data = this.props.data;
		return (

			<div style={{ maxWidth: '100%' }} className="tblMaterialTable">
				<MaterialTable
					columns={[
						{ title: 'ID', field: 'id_karyawan' },
						{ title: 'Nama', field: 'nama' },
						{ title: 'KTP', field: 'KTP', type: 'numeric' },
						{ title: 'No HP', field: 'no_hp', type: 'numeric' }
					]}
					actions={[
						{
							icon: 'edit',
							tooltip: 'Edit Karyawan',
							onClick: (e, ID) => { 
								this.props.editKaryawan(e, ID.id_karyawan)
							}
							
						},
						{
							icon: 'delete',
							tooltip: 'Hapus Karyawan',
							onClick: (e, ID) => { 
								this.props.deleteKaryawan(e, ID.id_karyawan)
							}
						}
					]}
					data={data}
					title="Data Karyawan"
				/>
			</div>
		);
	}
}

