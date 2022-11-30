import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from './components/About';
import Layout from './components/Layout';
import Privacy from './components/Privacy';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='blog' element={<Blog />} />
					<Route path='about' element={<About />} />
					<Route path='contact' element={<Contact />} />
					<Route path='privacy' element={<Privacy />} />
				</Route>
			</Routes>
		</>
	)
}

export default App;
