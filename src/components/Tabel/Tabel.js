import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Tabel.css';
import { PostData } from '../../services/PostDataKaryawan';
import TabelData from "../TabelData/TabelData";
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';


class Tabel extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			redirectToReferrer: false,

		};

		this.getKaryawanDataThis = this.getKaryawanDataThis.bind(this);
		this.feedUpdate = this.feedUpdate.bind(this);
		this.onChange = this.onChange.bind(this);
		this.deleteFeed = this.deleteFeed.bind(this);

		this.editFeed = this.editFeed.bind(this);

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
	feedUpdate(e) {

		e.preventDefault();
		console.log('udah disimpan')
		
	//	let data = JSON.parse(sessionStorage.getItem("nama"));

		let postData = { nama: this.refs.nama.value, KTP:this.refs.ktp.value, no_hp:this.refs.no_hp.value  };
		console.log(postData)

		/*
		let postData = { user_id: data.userData.user_id, feed: this.state.userFeed };
		if (this.state.userFeed) { */

			PostData('karyawanUpdate', postData).then((result) => {
				let responseJson = result;
				this.setState({ data: responseJson.karyawanData });

		//	});


		})

	
	}

	editFeed(e, FeedData) {
		let Cek = FeedData;
		alert(Cek);
		let postData = FeedData[1];
		alert(postData);

	}

	deleteFeed(e, feedId) {

		let updateIndex = e.target.getAttribute('value');

		let cek = feedId;
		let feed_id = document.getElementById("del").getAttribute("value");

		let data = JSON.parse(sessionStorage.getItem("userData"));

		let postData = { user_id: data.userData.user_id, feed_id: feedId };
		if (postData) {

			PostData('feedDelete', postData).then((result) => {
				//this.state.data.filter((_, i) => i == feedId);




				if (result.success) {
					alert(feedId);

					this.state.data.splice(updateIndex, 1);
					this.setState({ data: this.state.data });
					alert('ID : ' + feedId + ' Data Telah Dihapus');

					console.log(cek);
					console.log(updateIndex);
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
					<a href="/karyawan" className="button1" > <u>Karyawan</u></a>
					<a href="/home" className="button1" > <u>Halaman Utama</u></a>
					<a href="#" onClick={this.logout} className="logout">Logout</a>
					<div className="inputDivData">
						<h2>Belajar React CRUD</h2><br />
						<form ref="myForm" className="myForm">
							<input type="text" id="nama" ref="nama" placeholder="Nama Anda" className="inputData inputDiv" />
							<br />
							<input type="number" id="ktp" ref="ktp" placeholder="Nomor KTP" className="inputData inputDiv" />
							<br />
							<input type="text" id="no_hp" ref="no_hp" placeholder="Nomor HP" className="inputData inputDiv" />
							<br />


							<button
								type="submit"
								value="Post"
								className="button"
								onClick={this.feedUpdate}
								className="button button3">
								submit
						</button>
						</form>
					</div>

				</div>
				<div className="App">

					<div className="div-tbl">
					
							
							<TabelData karyawanData={this.state.data} deleteFeed={this.deleteFeed} editFeed={this.editFeed} name={this.state.name} />
						
					</div>
				</div>
			</div>
		);
	}
}

export default Tabel;