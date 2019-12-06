//#DATATABLES COMPONENT
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from '../../services/PostDataKaryawan';
import TabelData from "../TabelData/TabelData";
import './DatatablesKry.css';
import DatatablesKryData from '../DatatablesKryData/DatatablesKryData';

class DatatablesKry extends Component {
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
		let data =this.state.data;
		console.log(data);
		return (
			<div className="App">
				<div className="tbl-mr">
					<a href="/home" className="button1" > <u>Halaman Utama</u></a>
					<a href="/tabel" className="button1" > <u>Tabel</u></a>
					<a href="/datatable" className="button1" > <u>Data Tabel</u></a>
					<a href="/DatatablesKaryawan" className="button1" > <u>Datatables Karyawan</u></a>
					<a href="/karyawan" className="button1" > <u>Karyawan</u></a>
					<a href="#" onClick={this.logout} className="logout">Logout</a>
					<DatatablesKryData data={this.state.data}  />
				</div>
			</div>
		);
	}

	
}
export default DatatablesKry;