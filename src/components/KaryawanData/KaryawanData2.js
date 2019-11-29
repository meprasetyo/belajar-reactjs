import React, { Component } from 'react';
import Linkify from 'react-linkify';
import './KaryawanData.css';
//import TimeAgo from 'react-timeago';
class KaryawanData extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: 'Belajar React CRUD',
			act: 0,
			index: '',
			datas: []
		}
	}





	fSubmit = (e) => {
		e.preventDefault();
		console.log('try');

		let datas = this.state.datas;
		let nama = this.refs.nama.value;
		let ktp = this.refs.ktp.value;
		let no_hp = this.refs.no_hp.value;

		if (this.state.act === 0) {   //new
			let data = {
				nama, ktp, no_hp
			}
			datas.push(data);
		} else {                      //update
			let index = this.state.index;
			datas[index].nama = nama;
			datas[index].ktp = ktp;
			datas[index].no_hp = no_hp;
		}

		this.setState({
			datas: datas,
			act: 0
		});

		this.refs.myForm.reset();
		this.refs.nama.focus();
	}

	fRemove = (i) => {
		let datas = this.state.datas;
		datas.splice(i, 1);
		this.setState({
			datas: datas
		});

		this.refs.myForm.reset();
		this.refs.nama.focus();
	}

	fEdit = (i) => {
		let data = this.state.datas[i];
		this.refs.nama.value = data.nama;
		this.refs.ktp.value = data.ktp;
		this.refs.no_hp.value = data.no_hp;

		this.setState({
			act: 1,
			index: i
		});

		this.refs.nama.focus();
	}
	aFa() {

		document.getElementById('nama').val = '';
	}
	render() {
		let datas = this.state.datas;
		return (
			
			<div className="App">
			<h2>Belajar React CRUD</h2>
			<div className="inputDivData">
					<form ref="myForm" className="myForm">
						<input type="text" id="nama" ref="nama" placeholder="Nama Anda" className="inputData inputDiv" />
						<br />
						<input type="number" id="ktp" ref="ktp" placeholder="Nomor KTP" className="inputData inputDiv" />
						<br />
						<input type="number" id="no_hp" ref="no_hp" placeholder="Nomor HP" className="inputData inputDiv" />
						<br />
						<button onClick={(e) => this.fSubmit(e)} className="button button3">submit </button>

						<button onClick={this.aFa} className="button button2">Cancel </button>
					</form>
			</div>
			
			<div className="div-tbl">
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
					{datas.map((data, i) =>
						<tbody key={i}>
							<tr>
								<td>
									{i + 1}
								</td>
								<td>
									{data.nama}
								</td>
								<td>
									{data.ktp}
								</td>
								<td>
									{data.no_hp}
								</td>
								<td>
									<button onClick={() => this.fRemove(i)} className="myListButton">remove </button>
								</td>
								<td>
									<button onClick={() => this.fEdit(i)} className="myListButton">edit </button>
								</td>
							</tr>
						</tbody>
					)}
				</table>
			</div>
			</div>
		);
	}


}

export default KaryawanData;