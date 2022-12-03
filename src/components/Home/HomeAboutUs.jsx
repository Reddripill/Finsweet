import React from 'react'
import { Link } from 'react-router-dom';

function HomeAboutUs() {
	return (
		<div className='home-about-us__container _container'>
			<div className='home-about-us__wrapper'>
				<div className='home-about-us__item'>
					<div className='home-about-us__title'>ABOUT US</div>
					<h2 className='home-about-us__subtitle'>
						We are a community of content writers who share their learnings
					</h2>
					<div className='home-about-us__text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
					<Link to='/about' className='home-about-us__link'>{'Read More >'}</Link>
				</div>
				<div className='home-about-us__item'>
					<div className='home-about-us__title'>Our mision</div>
					<div className='home-about-us__subtitle home-about-us__subtitle_less'>
						Creating valuable content for creatives all around the world
					</div>
					<div className='home-about-us__text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeAboutUs;