import React from 'react'
import { Link } from 'react-router-dom';

function FeaturedPost() {
	return (
		<div className='home-featured-post__container _container'>
			<div className='home-featured-post__wrapper'>
				<div className='home-featured-post__category'>Posted on <span>startup</span></div>
				<div className='home-featured-post__name'>
					Step-by-step guide to choosing great font pairs
				</div>
				<div className='home-featured-post__info'>
					<div className='home-featured-post__author'>By <span>James West</span></div>
					<div className='home-featured-post__date'>May 23, 2022</div>
				</div>
				<div className='home-featured-post__excerpt'>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
				</div>
				<Link to='/post/:postId' className='home-featured-post__button button button_yellow'>
					{'Read More >'}
				</Link>
			</div>
		</div>
	)
}

export default FeaturedPost;