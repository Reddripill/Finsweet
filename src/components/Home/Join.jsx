import React from 'react'
import { Link } from 'react-router-dom';

function Join() {
	return (
		<div className='join__container _container'>
			<h2 className='join__title'>
				Join our team to be a part of our story
			</h2>
			<div className='join__text'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
			</div>
			<Link className='join__button button button_yellow'>
				Join Now
			</Link>
		</div>
	)
}

export default Join;