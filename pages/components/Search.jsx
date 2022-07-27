
const SearchBar = ({ click, change, resetClick, options_applications, options_actions }) => {


	return (
		<div className="search-bar">
			<div className="search-input">
				<p>Employee Name</p>
				<input className='filter' name='employee_name' type='text' onChange={change} placeholder='e.g. Admin.User' aria-label='Search' /></div>
			<div className="search-input">
				<p>Action Type
				</p>
				<select className='filter' name='action_type' type='text' onChange={change} aria-label='Selector' >
					<option value='' disabled selected hidden></option>
					{
						options_actions?.map((option, index) => (
							<option key={index} value={option}>{option}</option>))
					}


				</select >
			</div>
			<div className="search-input">
				<p>Application Type</p>
				<select className='filter' name='application_type' type='text' onChange={change} aria-label='Selector' >
					<option value='' disabled selected hidden></option>
					{
						options_applications?.map((option, index) => (
							option ?
								<option key={index} value={option}>
									{option}
								</option> : null))
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




