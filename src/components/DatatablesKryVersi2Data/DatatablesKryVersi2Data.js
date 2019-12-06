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
						{ title: 'Adı', field: 'id_karyawan' },
						{ title: 'Soyadı', field: 'nama' },
						{ title: 'Doğum Yılı', field: 'KTP', type: 'numeric' },
						{ title: 'Doğum Yeri', field: 'no_hp',  type: 'numeric' }
					]}
					data={data}
					title="Demo Title"
				/>
			</div>
		);
	}
}

