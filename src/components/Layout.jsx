import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Layout() {
	return (
		<div className='wrapper'>
			<Header />
			<main className='page'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout;