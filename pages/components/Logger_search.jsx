import React, { useState, useEffect } from 'react';
import { MDBDataTableV5 } from 'mdbreact';

import SearchBar from './Search';
// logger search component is parent of search bar component

export default function TableRender() {

	// set state for filter data which will be rendered in the data table
	const [filtereddata, setfiltereddata] = useState();

	// set state for searched data which is the condition for data table
	const [search, setSearch] = useState({});



	// a set start for data table with init value of columns and rows using MDB DataTable
	const [datatable, setDatatable] = useState(
		{
			columns: [

				{
					label: 'Log ID',
					field: 'log_ID',
					width: 100,
					attributes: {
						'aria-controls': 'DataTable',
						'aria-label': 'Name',
					},
				},
				{
					label: 'Application Type',
					field: 'application_Type',
					width: 100,
				},
				{
					label: 'Application ID',
					field: 'application_ID',
					width: 100,
				},
				{
					label: 'Action',
					field: 'action',
					width: 100,
				},
				{
					label: 'Action Details',
					field: 'action_Details',
					width: 100,
				},
				{
					label: 'Date : Time',
					field: 'date_time',
					width: 100,
				},
			],
			rows: [],
		},
		[]
	);

	//handleChange function which is called when the user enters the search text in the search bar
	function handleChange(e) {

		setSearch({ ...search, [e.target.name]: e.target.value || null });
		console.log("neww", search);

	}


	//handleClick function which is called when the user clicks on the search button(search logger)
	function handleClick() {


		const isNullUndefEmptyStr = Object.values(search).every(value => {

			if (value === null || value === undefined || value === '') {
				return true;
			}
			return false;
		});
		if (isNullUndefEmptyStr) {
			setfiltereddata(datatable?.rows);
		}
		else {

			setfiltereddata(datatable?.rows.filter((e) => {
				return e.log_ID.toString().includes(search.employee_name) || e.application_ID.toString().includes(search.application_id) || (e.action.toString() == search.action_type) || (e.application_Type.toString() == search.application_type) || (e.date_time.toString().slice(0, 10) >= search.from_date) || (e.date_time.toString().slice(0, 10) <= search.to_date)
			}))
		}
	}

	function handleReset() {
		Array.from(document.querySelectorAll("input")).forEach(
			input => (input.value = null)
		);
		Array.from(document.querySelectorAll("select")).forEach(
			option => (option.value = null)
		);

		setSearch({});

		setfiltereddata(datatable?.rows);
	}


	// Create a Table using fetchData from an API endpoint

	useEffect(() => {
		console.log(search);
		const fetchData = async () => {
			await fetch('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f')
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					let arr = [];
					data &&
						data.result.auditLog.map((ele) => {
							let obj = {
								log_ID: ele.logId || '-/-',
								application_Type: ele.applicationType || '-/-',
								application_ID: ele.applicationId || '-/-',
								action: ele.actionType || '-/-',
								action_Details: ele.actionDetails || '-/-',
								date_time: `${ele.creationTimestamp.slice(0, 11)} / ${ele.creationTimestamp.slice(11, -1)}` || '-/-',
							};
							arr.push(obj);
						});
					// console.log('--->>', arr);

					setDatatable({
						columns: [
							{
								label: 'Log ID',
								field: 'log_ID',
								width: 100,
							},
							{
								label: 'Application Type',
								field: 'application_Type',
								width: 100,
							},
							{
								label: 'Application ID',
								field: 'application_ID',
								width: 100,
							},
							{
								label: 'Action',
								field: 'action',
								width: 100,
							},
							{
								label: 'Action Details',
								field: 'action_Details',
								width: 100,
							},
							{
								label: 'Date : Time',
								field: 'date_time',
								width: 100,
							},
						],

						rows: [...arr],
					});

					// console.log(data.result.auditLog);
				})
				.catch((err) => {
					console.log(err);
				});

		};
		fetchData();
	}, [search]);




	return (
		<>
			<SearchBar change={handleChange} click={handleClick} resetClick={handleReset} />
			<div className='datatable' data-mdb-full-pagination='true' data-mdb-hover='true'>
				<MDBDataTableV5 hover entriesOptions={[10, 15, 20, 50]} searching={false} data={{ ...datatable, rows: filtereddata || datatable.rows }} fullPagination />
			</div>
		</>
	);
}

