import Head from 'next/head';
import React, { useState, useEffect } from 'react';


import DataTable from './components/Logger_search';
import NavBar from './components/NavBar';

export default function Home() {
	return (
		<div>
			<NavBar />
			<DataTable />
		</div>
	);
}
