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
									<button onClick={() => this.fRemove(TabelData)} className="myListButton">remove </button>
								</td>
								<td className="td-center">
									<button onClick={() => this.fEdit(TabelData)} className="myListButton">edit </button>
								</td>
							</tr>
						</tbody>
					
			
				)}
				</table>
			)
		
	
	}
}




export default TabelData;