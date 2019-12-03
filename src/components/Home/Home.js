import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Home.css';
import { PostData } from '../../services/PostData';
import UserFeed from "../UserFeed/UserFeed";
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			userFeed: '',
			redirectToReferrer: false,
			name: '',
		};

		this.getUserFeed = this.getUserFeed.bind(this);
		this.feedInsert = this.feedInsert.bind(this);
		this.feedEdit = this.feedEdit.bind(this);
		this.feedUpdate = this.feedUpdate.bind(this);
		this.deleteFeed = this.deleteFeed.bind(this);
		this.onChange = this.onChange.bind(this);
		this.logout = this.logout.bind(this);
	}

	componentWillMount() {

		if (sessionStorage.getItem("userData")) {
			this.getUserFeed();
		}
		else {
			this.setState({ redirectToReferrer: true });
		}
	}

	feedInsert(e) {

		e.preventDefault();
		let data = JSON.parse(sessionStorage.getItem("userData"));
		let dataSendIDUser = data.userData.user_id;
		let cekInputUserFeed = this.refs.InputUserFeed.value;
		console.log(dataSendIDUser);
		let postData = { user_id: dataSendIDUser, feed: this.refs.InputUserFeed.value };
		if (cekInputUserFeed === '') {
			alert('Please input data');
		}
		else {
			PostData('feedInsert', postData).then((result) => {
				let responseJson = result;
				this.refs.feed_id.value = '';
				this.refs.InputUserFeed.value = '';
				this.setState({ data: responseJson.feedData });
			});
		} 
	}

	deleteFeed(e, feedId) {

		let updateIndex = e.target.getAttribute('value');
		let cek = feedId;
		let feed_id = document.getElementById("del").getAttribute("value");
		let data = JSON.parse(sessionStorage.getItem("userData"));
		let postData = { user_id: data.userData.user_id, feed_id: feedId };
		if (postData) {
			PostData('feedDelete', postData).then((result) => {
				if (result.success) {
					this.state.data.splice(updateIndex, 1);
					this.setState({ data: this.state.data });
					alert('ID : ' + feedId + ' Data Telah Dihapus');
				}
				else
					alert(result.error);
			});
		}
	}

	feedEdit(e, feedEditID) {
		let feed_idInput = this.refs.feed_id;
		let InputUserFeedInput = this.refs.InputUserFeed;
		let Cek = feedEditID;
		alert('Ubah data dengan ID : '+ Cek);
		let feed_id = feedEditID;
		console.log(feedEditID);
		const buttonKirim = document.getElementById('button-send');
		buttonKirim.style.display = 'none';
		const buttonUpdate = document.getElementById('button-update');
		buttonUpdate.style.display = 'initial';
		let postData = { feed_id: feed_id };
		if (postData) {
			PostData('feedEdit', postData).then((result) => {
				let responseJson = result;
				if (responseJson.feedData) {
					let printData = responseJson.feedData;
					console.log(printData);
					let feed_id = printData[0].feed_id;
					let InputUserFeed = printData[0].feed;
			
					feed_idInput.value = printData[0].feed_id;
					InputUserFeedInput.value = printData[0].feed;
				}
			});
		} 
	}

	feedUpdate(e) {
		e.preventDefault();
		console.log('udah disimpan')
		let postData = { feed_id: this.refs.feed_id.value, feed: this.refs.InputUserFeed.value };
		let cekfeed_id = this.refs.feed_id.value;
		let cekInputUserFeed = this.refs.InputUserFeed.value;
		console.log(postData)
		if (cekInputUserFeed === '') {
			alert('Please input data');
		}
		else {
			PostData('feedUpdate', postData).then((result) => {
				let responseJson = result;
				this.setState({ data: responseJson.feedData });
				this.refs.feed_id.value = '';
				this.refs.InputUserFeed.value = '';
				const buttonKirim = document.getElementById('button-send');
				buttonKirim.style.display = 'initial';
				const buttonUpdate = document.getElementById('button-update');
				buttonUpdate.style.display = 'none';
				return  this.getUserFeed();
			})
			
		}
	}

	/* deleteFeedAction(e) {

		let updateIndex = e.target.getAttribute('value');
		let feed_id = document.getElementById("del").getAttribute("data");
		let cek = document.getElementById("del").getAttribute("value");
		let data = JSON.parse(sessionStorage.getItem("userData"));
		let postData = { user_id: data.userData.user_id, feed_id: feed_id };
		if (postData) {
			PostData('feedDelete', postData).then((result) => {
				this.state.data.splice(updateIndex, 1);
				this.setState({ data: this.state.data });
				if (result.success) {
					alert(result.success);
					console.log(cek);
				}
				else
					alert(result.error);
			});
		}
	} */

	getUserFeed() {

		let data = JSON.parse(sessionStorage.getItem("userData"));
		this.setState({ name: data.userData.name });
		let postData = { user_id: data.userData.user_id };
		if (data) {
			PostData('feed', postData).then((result) => {
				let responseJson = result;
				if (responseJson.feedData) {
					this.setState({ data: responseJson.feedData });
					console.log(this.state);
				}
			});
		}
	}

	onChange(e) {
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
					<a href="/home" className="button1" > <u>Halaman Utama</u></a>
					<a href="/tabel" className="button1" > <u>Tabel</u></a>
					<a href="/datatable" className="button1" > <u>Data Tabel</u></a>
					<a href="/karyawan" className="button1" > <u>Karyawan</u></a>
					<a href="#" onClick={this.logout} className="logout">Logout</a>
					<form onSubmit={this.feedInsert} method="post">
						<input name="feed_id" id="feed_id" ref="feed_id" type="hidden"/>
						<input name="InputUserFeed" id="InputUserFeed" ref="InputUserFeed" type="text" placeholder="Write your feed here..." />
						<button type="submit" className="button" id="button-send" onClick={this.feedInsert} > Send </button>
						<button type="submit" className="button" id="button-update" onClick={this.feedUpdate} > Update </button>
					</form>
				</div>
				<UserFeed feedData={this.state.data} deleteFeed={this.deleteFeed} feedEdit={this.feedEdit} name={this.state.name} />
			</div>
		);
	}
}

export default Home;