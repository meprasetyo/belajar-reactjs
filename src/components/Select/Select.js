import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Select.css';
import { PostData } from '../../services/PostDataKaryawan';
import SelectData from "../SelectData/SelectData";
import { confirmAlert } from 'react-confirm-alert';
import Popup from "reactjs-popup";

class SelectBaca extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			redirectToReferrer: false,
		};
		//Deklarasi Function
		this.getKaryawanDataThis = this.getKaryawanDataThis.bind(this);
		this.karyawanInput = this.karyawanInput.bind(this);
		this.kotaInputGet = this.kotaInputGet.bind(this);
		this.karyawanUpdate = this.karyawanUpdate.bind(this);
		this.onChange = this.onChange.bind(this);
		this.deleteKaryawan = this.deleteKaryawan.bind(this);
		this.editKaryawan = this.editKaryawan.bind(this);
		this.clearData = this.clearData.bind(this);
		this.logout = this.logout.bind(this);
		this.getSelectKota = this.getSelectKota.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	componentWillMount() {
		if (sessionStorage.getItem("userData")) {
			this.getKaryawanDataThis();
			this.getSelectKota();
		}
		else {
			this.setState({ redirectToReferrer: true });
		}
	}
	/* Aksi Create Data */
	karyawanInput(e) {
		e.preventDefault();
		console.log('udah disimpan')
		let postData = { nama: this.refs.nama.value, KTP: this.refs.ktp.value, no_hp: this.refs.no_hp.value, id_kota: this.refs.selectDataPrint.value };
		let namaDataPrint = this.refs.nama.value;
		let ktpDataPrint = this.refs.ktp.value;
		let no_hpDataPrint = this.refs.no_hp.value;
		let CekSlct = this.refs.selectKota.value;
		let selectDataPrint = this.refs.selectDataPrint.value;
		console.log('nama :', namaDataPrint)
		console.log('KTP :', ktpDataPrint)
		console.log('No HP :', no_hpDataPrint)
		console.log('Select Kota :', selectDataPrint)
		if (namaDataPrint === '') {
			alert('Nama tidak boleh kosong');
		}
		else {
			if (ktpDataPrint === '') {
				alert('No KTP tidak boleh kosong');
			}
			else {
				if (no_hpDataPrint === '') {
					alert('No HP tidak boleh kosong');
				}
				else {
					if (selectDataPrint === '0') {
						alert('Silahkan pilih kota');
					}
					else {
						PostData('karyawanInputSelect', postData).then((result) => {
							let responseJson = result;
							this.setState({ data: responseJson.karyawanData });
							this.refs.nama.value = '';
							this.refs.ktp.value = '';
							this.refs.no_hp.value = '';
							return this.getKaryawanDataThis();
						})
					}
				}
			}
		}
	}
	kotaInputGet(e) {
		e.preventDefault();
		console.log('udah disimpan')
		let postData = { kota: this.refs.kotaModal.value };
		let kotaInput = this.refs.kotaModal.value;
		console.log(kotaInput)
		if (kotaInput === '') {
			alert('Data tidak boleh kosong');
			return false;
		}
		else {
			PostData('kotaInput', postData).then((result) => {
				let responseJson = result;
				this.setState({ data: responseJson.dataKota });
				this.refs.kotaModal.value = '';
				return this.getSelectKota(), this.getKaryawanDataThis();
			})
			
		}
	}
	/* Aksi Create Data */
	karyawanUpdate(e) {
		e.preventDefault();
		console.log('udah disimpan')
		let postData = { nama: this.refs.nama.value, KTP: this.refs.ktp.value, no_hp: this.refs.no_hp.value, id_karyawan: this.refs.id_karyawan.value, id_kota: this.refs.selectDataPrint.value };
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
					PostData('karyawanUpdateSelect', postData).then((result) => {
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
						return this.getKaryawanDataThis();
					})
				}
			}
		}
	}
	clearData() {
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
		alert('Ubah data dengan ID : ' + Cek);
		let namaINPUT = this.refs.nama;
		let ktpINPUT = this.refs.ktp;
		let no_hpINPUT = this.refs.no_hp;
		let id_karyawanINPUT = this.refs.id_karyawan;
		let selectKota = this.refs.selectKota;
		let selectDataPrint = this.refs.selectDataPrint;

		const buttonKirim = document.getElementById('kirim');
		buttonKirim.style.display = 'none';
		const buttonUpdate = document.getElementById('update');
		buttonUpdate.className = 'button button3';
		let postData = { id_karyawan: KaryawanID };
		if (postData) {
			PostData('karyawanEditSelect', postData).then((result) => {

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
					id_karyawanINPUT.value = cekDATAINI[0].id_karyawan;
					//selectKota.value = cekDATAINI[0].id_kota;
					selectDataPrint.value = cekDATAINI[0].id_kota;
					//	let cekDATA = 
					console.log(cekDATAKTP);
					console.log(cekDATANAMA);
					console.log(cekDATAINI[0].id_kota);
				}
			});
		}
	}
	deleteKaryawan(e, KaryawanID) {
		let updateIndex = e.target.getAttribute('value');
		let cek = KaryawanID;
		// alert(cek);
		let postData = { id_karyawan: KaryawanID };
		confirmAlert({
			title: 'Hapus Karyawan',
			message: 'Are you sure to delete this data.',
			buttons: [
				{
					label: 'Yes',
					onClick: () => {
						if (postData) {
							PostData('karyawanDeleteSelect', postData).then((result) => {
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
				},
				{
					label: 'No',
					onClick: () => alert('Data Tidak Dihapus')
				}
			]
		});
	}
	getKaryawanDataThis() {
		let data = JSON.parse(sessionStorage.getItem("userData"));
		this.setState({ name: data.userData.name });
		let postData = { user_id: data.userData.user_id };
		if (data) {
			PostData('karyawanSelect', postData).then((result) => {
				let responseJson = result;
				if (responseJson.karyawanData) {
					this.setState({ data: responseJson.karyawanData });
					console.log(this.state);
				}
			});
		}
	}
	/*
	getSelectKota() {
		let data = JSON.parse(sessionStorage.getItem("userData"));
	
		this.setState({ name: data.userData.name });
		let postData = { user_id: data.userData.user_id };
		if (data) {
			PostData('selectKota', postData).then((result) => {
				let responseJson = result;
				if (responseJson.dataKota) {
					this.setState({ dataKota: responseJson.dataKota });
					console.log(this.state.dataKota);
				}
			});	
		}
	}
	*/

	getSelectKota() {
		let data = JSON.parse(sessionStorage.getItem("userData"));

		this.setState({ name: data.userData.name });
		let postData = { user_id: data.userData.user_id };
		if (data) {
			PostData('selectKota', postData).then((result) => {
				let responseJson = result;
				if (responseJson.dataKota) {
					this.setState({ dataKota: responseJson.dataKota });
					console.log(this.state.dataKota);
				}
			});
		}
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
		//console.log(this.state.value)
	}
	onChange(e) {
		this.setState({ nama: e.target.value });
		this.setState({ KTP: e.target.value });
		this.setState({ userFeed: e.target.value });
		this.setState({ userFeed: e.kotaModal.value });
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
		let dataKota = this.state.dataKota;
		//console.log(dataKota)
		return (
			<div className="row" id="Body">
				<div className="medium-12 columns">
					<div style={{ paddingTop: '50px', textAlign: 'center' }}>
						<a href="/home" className="button1" > <u>Halaman Utama</u></a>
						<a href="/tabel" className="button1" > <u>Tabel</u></a>
						<a href="/datatable" className="button1" > <u>Data Tabel</u></a>
						<a href="/DatatablesKaryawan" className="button1" > <u>Datatables Karyawan</u></a>
						<a href="/DatatablesKaryawanVersi2" className="button1" > <u>Material UI Karyawan</u></a>
						<a href="/karyawan" className="button1" > <u>Karyawan</u></a>
						<a href="/select" className="button1" > <u>Select Option</u></a>
						<a href="#" onClick={this.logout} style={{ color: 'red' }} className="button1">  <u>Logout</u></a>
					</div>

					<div className="inputDivData">
					<h2>CRUD Select & Update Select Option</h2>
					<br />
					
						<br /><br />
						<form ref="myForm" className="myForm">
							<input type="hidden" id="id_karyawan" ref="id_karyawan" placeholder="id_karyawan" className="inputData inputDiv" />
							<input type="text" id="nama" ref="nama" placeholder="Nama Anda" className="inputData inputDiv" />
							<br />
							<input type="number" id="ktp" ref="ktp" placeholder="Nomor KTP" style={{ height: "50px" }} className="inputData inputDiv" />
							<br />
							<input type="text" id="no_hp" ref="no_hp" placeholder="Nomor HP" className="inputData inputDiv" />
							<br />
							<select className="inputData inputDiv" value={this.state.value} ref="selectDataPrint" style={{ height: "50px" }} onChange={this.handleChange} >
									<option value="0">-- Pilih Kota --</option>
								{dataKota && dataKota.map((KotaPrint, KotaKey) =>
									<option key={KotaKey} value={KotaPrint.id_kota} ref="selectKota">{KotaPrint.kota}</option>
								)}
							</select>
							<br />
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
						<br /><br />
					</div>
					<div style={{paddingLeft:'20px'}}>
					<form ref="myFormModal" className="myFormModal" >
						<div className="content">
							<br />
							<div>
								<strong>Tambah Data Kota : </strong><input type="text" id="kotaModal" ref="kotaModal" style={{width: '300px', display: 'inline'}} placeholder="Input Here..." className="inputData inputDiv" />
								<button
									type="submit"
									id="kirimModal"
									name="kirimModal"
									onClick={this.kotaInputGet}
									style={{minWidth:'80px', marginTop: '14px',marginLeft: '24px'}}
									className="button button3">
									Kirim
								</button>	
							</div>
							<br />
						</div>						
					</form>
					</div>			
					<div style={{paddingLeft:'20px', display:'none'}} >
						<strong></strong>Tambah Data Kota : <Popup trigger={<button className="button" style={{marginLeft:'20px'}}> Klik Disini </button>} modal>
							{close => (
								
								<div className="modal">
									<a className="close" onClick={close}>
										&times;
        							</a>
									<div className="header"> Tambah Kota </div>
									<form ref="myFormModal" className="myFormModal" >
									<div className="content">
										<br />
										<input type="text" id="kotaModal" ref="kotaModal" style={{width: '80%'}} placeholder="Input Here..." className="inputData inputDiv" />
										<br /><br /><br />
        							</div>
									<div className="actions" style={{ textAlign:'center'}}>
										<button
											type="submit"
											id="kirimModal"
											name="kirimModal"
											onClick={this.kotaInputGet}
											className="button button3">
											Kirim
										</button>
										<button
											className="button"
											onClick={() => {
												console.log("modal closed ");
												close();
											}} >
											Batal
          								</button>
									</div>
									</form>
								</div>
								
							)}
						</Popup>
					</div>
				</div>
				<div className="App">
					<div className="div-tbl">
						<SelectData karyawanData={this.state.data} deleteKaryawan={this.deleteKaryawan} editKaryawan={this.editKaryawan} name={this.state.name} />
					</div>
				</div>
			</div>
		);
	}
}
export default SelectBaca;