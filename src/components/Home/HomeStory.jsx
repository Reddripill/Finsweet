import React from 'react'
import { Link } from 'react-router-dom';

function HomeStory() {
	return (
		<div className='home-story__container _container'>
			<div className='home-story__photo _ibg'>
				<img src='img/embrase.jpg' alt='embrace of children' />
			</div>
			<div className='home-story__content'>
				<div className='home-story__topic'>
					Why we started
				</div>
				<h2 className='home-story__title'>
					It started out as a simple idea and evolved into our passion
				</h2>
				<div className='home-story__text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
				</div>
				<Link to='/' className='home-story__button button button_yellow'>
					{'Discover our story >'}
				</Link>
			</div>
		</div>
	)
}

export default HomeStory;