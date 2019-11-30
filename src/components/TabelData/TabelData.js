import React, { Component } from 'react';
import Linkify from 'react-linkify';
import './TabelData.css';

//import TimeAgo from 'react-timeago';
class TabelData extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let data = this.props.karyawanData
		return (
			<table border="1" className="tbl-cls">
				<thead id="thead">
					<tr>
						<td className="text-center">No</td>
						<td className="text-center">Nama</td>
						<td className="text-center">No KTP</td>
						<td className="text-center">No HP</td>
						<td className="text-center">Aksi Hapus</td>
						<td className="text-center">Aksi Ubah</td>
					</tr>
				</thead>
				{data.map((TabelData, Kayawan) =>
					<tbody key={Kayawan}>
						<tr>
							<td className="td-center">
								{Kayawan + 1}
							</td>
							<td className="td">
								{TabelData.nama}
							</td>
							<td className="td-center">
								{TabelData.KTP}
							</td>
							<td className="td-center">
								{TabelData.no_hp}
							</td>
							<td className="td-center">
								<button id="del" className="button small btn-color" onClick={(e) => this.props.deleteKaryawan(e, TabelData.id_karyawan)} data={TabelData.id_karyawan} value={Kayawan}>
									<i className="fa fa-user-times" aria-hidden="true"></i>
									Hapus Data
								</button>
							</td>
							<td className="td-center">
								<button id="edit" className="button small btn-color2" onClick={(e) => this.props.editKaryawan(e, TabelData.id_karyawan)} data={TabelData.id_karyawan} value={Kayawan}>
									<i className="fa fa-user-times" aria-hidden="true"></i>
									Ubah Data
								</button>
							</td>
						</tr>
					</tbody>
				)}
			</table>
		)
	}
}

export default TabelData;