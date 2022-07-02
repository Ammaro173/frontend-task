import React, { useState, useEffect } from 'react';


const SearchBar = ({ click, change, resetClick }) => {

	let options_applications = [null, 'CERT_TITLE_DEED_PLOT', 'LEASE_REGISTRATION', 'ADD_POA', 'ADD_COMPANY', 'ADD_COMPANY_EMPLOYEE', 'CERT_PROP_OWNERSHIP', 'LEASE_CLOSURE']
	let options_actions = [null, 'DARI_REFRESH_TOKEN', 'DARI_APP_LOGIN', 'INITIATE_APPLICATION', 'SUBMIT_APPLICATION', 'ADD_EMPLOYEE']


	return (
		<div className="search-bar">
			<div className="search-input">
				<p>Employee Name</p>
				<input className='filter' name='employee_name' type='text' onChange={change} placeholder='e.g. Admin.User' aria-label='Search' /></div>
			<div className="search-input">
				<p>Action Type
				</p>
				<select className='filter' name='action_type' type='text' onChange={change} aria-label='Selector' >
					{
						options_actions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>))
					}

				</select >
			</div>
			<div className="search-input">
				<p>Application Type</p>
				<select className='filter' name='application_type' type='text' onChange={change} aria-label='Selector' >
					{
						options_applications.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>))
					}
				</select >
			</div>
			<div className="search-input">
				<p>From Date</p>
				<input className='filter' type='date' name='from_date' onChange={change} aria-label='Search' /></div>
			<div className="search-input">
				<p>To Date</p>
				<input className='filter' type='date' name='to_date' onChange={change} aria-label='Search' /></div>
			<div className="search-input">
				<p>Application_ID</p>
				<input className='filter' type='text' name='application_id' onChange={change} placeholder='e.g. 219841/2021' aria-label='Search' /></div>
			<div className="search-button">
				<button className='search-logger' onClick={click} aria-label='Button' >Search Logger</button>
			</div>
			<div className="reset-button-div">
				<br />
				<button className='reset-button' onClick={resetClick} aria-label='Button' >Clear All Search</button>
			</div>

		</div >
	);
};

export default SearchBar;




