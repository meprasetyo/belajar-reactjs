import React, { Component } from 'react';
import Linkify from 'react-linkify';
import './KaryawanData.css';
//import TimeAgo from 'react-timeago';
class KaryawanData extends Component {

	constructor(props) {
		super(props);
	
	}

	render() {
		
		let userFeed = this.props.feedData
			.map(function (karyawanData, Karyawan) {
				return (
					< div className="medium-4 columns" key={Karyawan} >

						<div className="people-you-might-know">

							<div className="row add-people-section">
								<div className="small-12 medium-10 columns about-people">

									<div className="about-people-author">
										<p className="author-name">
											<b>User : {this.props.name}</b>

											Nama : {karyawanData.nama}<br />
											KTP : {karyawanData.KTP}<br />
											No HP : {karyawanData.no_hp}


											<br />

										</p>
									</div>
								</div>
								<div className="small-12 medium-2 columns add-friend">

									<div className="add-friend-action">
										<button id="edit" className="button small btn-color2" >
											<i className="fa fa-user-times" aria-hidden="true"></i>
											Ubah
											</button>
										<button id="del" className="button small btn-color" >
											<i className="fa fa-user-times" aria-hidden="true"></i>
											Hapus
											</button>
									</div>
								</div>
							</div>
						</div>
					</div>




				)
			}, this);

		return (
			<div>
				{userFeed}

			</div>
		);


		
	}



	

}

export default KaryawanData;