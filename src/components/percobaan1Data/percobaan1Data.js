import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from '../../services/PostDataKaryawan';
import TabelData from "../TabelData/TabelData";
import './percobaan1Data.css';
import TableBaca from '../percobaan1/percobaan1';

class percobaan1Data extends Component {
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
		let data = this.props.data;
		console.log(data);
		return (
			<div className="App">
				<div className="tbl-mr">
					<a href="/home" className="button1" > <u>Halaman Utama</u></a>
					<a href="/tabel" className="button1" > <u>Tabel</u></a>
					<a href="/datatable" className="button1" > <u>Data Tabel</u></a>
					<a href="/karyawan" className="button1" > <u>Karyawan</u></a>
					<a href="#" onClick={this.logout} className="logout">Logout</a>
					<TableBaca data={this.props.data} />
				</div>
			</div>
		);
	}
	dataSet = [
		["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
		["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
		["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
		["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
		["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
		["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
		["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
		["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
		["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
		["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
		["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
		["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
		["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
		["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
		["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
		["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"],
		["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000"],
		["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500"],
		["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000"],
		["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
		["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000"],
		["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000"],
		["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450"],
		["Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600"],
		["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000"],
		["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
		["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650"],
		["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850"],
		["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000"],
		["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000"],
		["Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400"],
		["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
		["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000"],
		["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500"],
		["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050"],
		["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675"]
	];
}
export default percobaan1Data;