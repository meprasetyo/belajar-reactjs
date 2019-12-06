// #Tabel Biasa / Bawaan  
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Tabel.css';
import { PostData } from '../../services/PostDataKaryawan';
import TabelData from "../TabelData/TabelData";
import { confirmAlert } from 'react-confirm-alert';
// import '../../styles/react-confirm-alert.css';

class Tabel extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			redirectToReferrer: false,
		};
		//Deklarasi Function
		this.getKaryawanDataThis = this.getKaryawanDataThis.bind(this);
		this.karyawanInput = this.karyawanInput.bind(this);
		this.karyawanUpdate = this.karyawanUpdate.bind(this);
		this.onChange = this.onChange.bind(this);
		this.deleteKaryawan = this.deleteKaryawan.bind(this);
		this.editKaryawan = this.editKaryawan.bind(this);
		this.clearData = this.clearData.bind(this);
		this.logout = this.logout.bind(this);
	}
	componentWillMount() {
		if (sessionStorage.getItem("userData")) {
			this.getKaryawanDataThis();
		}
		else {
			this.setState({ redirectToReferrer: true });
		}
	}
	/* Aksi Create Data */
	karyawanInput(e) {
		e.preventDefault();
		console.log('udah disimpan')
		let postData = { nama: this.refs.nama.value, KTP: this.refs.ktp.value, no_hp: this.refs.no_hp.value };
		let cekNama = this.refs.nama.value;
		let cekKTP = this.refs.ktp.value;
		let cekHP = this.refs.no_hp.value;
		console.log(postData)
		if (cekNama === '') {
			alert('Nama tidak boleh kosong');
		}
		else {
			if (cekKTP === '') {
				alert('No KTP tidak boleh kosong');
			}
			else {
				if (cekHP === '') {
					alert('No HP tidak boleh kosong');
				}
				else {
					PostData('karyawanInput', postData).then((result) => {
						let responseJson = result;
						this.setState({ data: responseJson.karyawanData });
						this.refs.nama.value = '';
						this.refs.ktp.value = '';
						this.refs.no_hp.value = '';
						return  this.getKaryawanDataThis();
					})
				}
			}
		}
	}
		/* Aksi Create Data */
		karyawanUpdate(e) {
			e.preventDefault();
			console.log('udah disimpan')
			let postData = { nama: this.refs.nama.value, KTP: this.refs.ktp.value, no_hp: this.refs.no_hp.value, id_karyawan:  this.refs.id_karyawan.value };
			let cekNama = this.refs.nama.value;
			let cekKTP = this.refs.ktp.value;
			let cekHP = this.refs.no_hp.value;
			console.log(postData)
			if (cekNama === '') {
				alert('Nama tidak boleh kosong');
			}
			else {
				if (cekKTP === '') {
					alert('No KTP tidak boleh kosong');
				}
				else {
					if (cekHP === '') {
						alert('No HP tidak boleh kosong');
					}
					else {
						PostData('karyawanUpdate', postData).then((result) => {
							let responseJson = result;
							this.setState({ data: responseJson.karyawanData });
							this.refs.nama.value = '';
							this.refs.ktp.value = '';
							this.refs.no_hp.value = '';
							this.refs.id_karyawan.value = '';
							const buttonKirim = document.getElementById('kirim');
							buttonKirim.style.display = 'initial';
							const buttonUpdate = document.getElementById('update');
							buttonUpdate.className = 'button button3 hide';
							return  this.getKaryawanDataThis();
						})
					}
				}
			}
		}
	clearData(){
		this.refs.nama.value = '';
		this.refs.ktp.value = '';
		this.refs.no_hp.value = '';
		const buttonKirim = document.getElementById('kirim');
		buttonKirim.style.display = 'initial';
		const buttonUpdate = document.getElementById('update');
		buttonUpdate.className = 'button button3 hide';
	}
	editKaryawan(e, KaryawanID) {
		let Cek = KaryawanID;
		alert('Ubah data dengan ID : '+ Cek);
		let namaINPUT = this.refs.nama;
		let ktpINPUT = this.refs.ktp;
		let no_hpINPUT = this.refs.no_hp;
		let id_karyawanINPUT = this.refs.id_karyawan;
		
		const buttonKirim = document.getElementById('kirim');
		buttonKirim.style.display = 'none';
		const buttonUpdate = document.getElementById('update');
		buttonUpdate.className = 'button button3';
		let postData = { id_karyawan: KaryawanID };
		if (postData) {
			PostData('karyawanEdit', postData).then((result) => {
				
				let responseJson = result;
				if (responseJson.karyawanData) {
					// let cekDATAINI = responseJson.karyawanData;
					let cekDATAINI = responseJson.karyawanData;
					let cekDATAKTP = cekDATAINI[0].KTP;
					let cekDATANAMA = cekDATAINI[0].nama;
					let cekDATANOHP = cekDATAINI[0].no_hp;
					namaINPUT.value = cekDATAINI[0].nama;
					ktpINPUT.value = cekDATAINI[0].KTP;
					no_hpINPUT.value = cekDATAINI[0].no_hp;
					id_karyawanINPUT.value = cekDATAINI[0].id_karyawan;
				//	let cekDATA = 
					console.log(cekDATAKTP);
					console.log(cekDATANAMA);
					console.log(cekDATANOHP);
				}
			});
		}
	}
	deleteKaryawan(e, KaryawanID) {
		let updateIndex = e.target.getAttribute('value');
		let cek = KaryawanID;
		// alert(cek);
		let postData = { id_karyawan: KaryawanID };
		if (postData) {
			PostData('karyawanDelete', postData).then((result) => {
				//this.state.data.filter((_, i) => i == feedId);
				if (result.success) {
					// alert(KaryawanID);
					this.state.data.splice(updateIndex, 1);
					this.setState({ data: this.state.data });
					alert('ID : ' + KaryawanID + ' Data Telah Dihapus');
					console.log(cek);
					console.log(updateIndex);
					this.refs.nama.value = '';
					this.refs.ktp.value = '';
					this.refs.no_hp.value = '';
					this.refs.id_karyawan.value = '';
					const buttonKirim = document.getElementById('kirim');
					buttonKirim.style.display = 'initial';
					const buttonUpdate = document.getElementById('update');
					buttonUpdate.className = 'button button3 hide';
				}
				else
					alert(result.error);
			});
		}
	}
	getKaryawanDataThis() {
		let data = JSON.parse(sessionStorage.getItem("userData"));
		this.setState({ name: data.userData.name });
		let postData = { user_id: data.userData.user_id };
		if (data) {
			PostData('karyawan', postData).then((result) => {
				let responseJson = result;
				if (responseJson.karyawanData) {
					this.setState({ data: responseJson.karyawanData });
					console.log(this.state);
				}
			});
		}
	}
	onChange(e) {
		this.setState({ nama: e.target.value });
		this.setState({ KTP: e.target.value });
		this.setState({ userFeed: e.target.value });
	}
	logout() {
		sessionStorage.setItem("userData", '');
		sessionStorage.clear();
		this.setState({ redirectToReferrer: true });
	}
	render() {
		if (this.state.redirectToReferrer) {
			return (<Redirect to={'/login'} />)
		}
		return (
			<div className="row" id="Body">
				<div className="medium-12 columns">
				<div style={{ paddingTop:'50px', textAlign:'center' }}>
					<a href="/home" className="button1" > <u>Halaman Utama</u></a>
					<a href="/tabel" className="button1" > <u>Tabel</u></a>
					<a href="/datatable" className="button1" > <u>Data Tabel</u></a>
					<a href="/DatatablesKaryawan" className="button1" > <u>Datatables Karyawan</u></a>
					<a href="/DatatablesKaryawanVersi2" className="button1" > <u>Material UI Karyawan</u></a>
					<a href="/karyawan" className="button1" > <u>Karyawan</u></a>
					<a href="#" onClick={this.logout} style={{ color: 'red' }} className="button1">  <u>Logout</u></a>
					</div>
					<div className="inputDivData">
						<h2>Belajar React CRUD</h2><br />
						<form ref="myForm" className="myForm">
							<input type="hidden" id="id_karyawan" ref="id_karyawan" placeholder="id_karyawan" className="inputData inputDiv" />	
							<input type="text" id="nama" ref="nama" placeholder="Nama Anda" className="inputData inputDiv" />
							<br />
							<input type="number" id="ktp" ref="ktp" placeholder="Nomor KTP" className="inputData inputDiv" />
							<br />
							<input type="text" id="no_hp" ref="no_hp" placeholder="Nomor HP" className="inputData inputDiv" />
							<br />
							<button
								type="submit"
								id="kirim"
								name="kirim"
								onClick={this.karyawanInput}
								className="button button3">
								Kirim
						</button>
						<button
								type="submit"
								id="update"
								name="update"
								onClick={this.karyawanUpdate}
								className="button button3 hide">
								Update
						</button>
						<button
								type="button"
								value="Post"
								className="button"
								onClick={this.clearData}
								className="button button2">
								Batal
						</button>
						</form>
					</div>
				</div>
				<div className="App">
					<div className="div-tbl">
						<TabelData karyawanData={this.state.data} deleteKaryawan={this.deleteKaryawan} editKaryawan={this.editKaryawan} name={this.state.name} />
					</div>
				</div>
			</div>
		);
	}
}
export default Tabel;