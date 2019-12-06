import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './PaginationExc.css';
import { PostData } from '../../services/PostData';
import UserFeed from "../UserFeed/UserFeed";
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';
import Pagination from "react-js-pagination";


class PaginationExc extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			userFeed: '',
			redirectToReferrer: false,
			name: '',
		};


		this.onChange = this.onChange.bind(this);
		this.logout = this.logout.bind(this);
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
					<a href="/DatatablesKaryawan" className="button1" > <u>Datatables Karyawan</u></a>
					<a href="/DatatablesKaryawanVersi2" className="button1" > <u>Material UI Karyawan</u></a>
					<a href="/karyawan" className="button1" > <u>Karyawan</u></a>
					<a href="#" onClick={this.logout} className="logout">Logout</a>
				
				</div>
					<div className="pad-pagination">
						<div className="ul-pagination">
						<Pagination
						
						hideDisabled
						activePage={this.state.activePage}
						itemsCountPerPage={5}
						totalItemsCount={1000}
						onChange={this.handlePageChange}
						
						/>
						</div>
					</div>
				</div>
		);
	}
}

export default PaginationExc;