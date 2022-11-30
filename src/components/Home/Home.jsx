import React from 'react'
import FeaturedPost from './FeaturedPost';

function Home() {
	return (
		<div className='page__home home-page'>
			<section className='home-page__featured home-featured-post'>
				<FeaturedPost />
				<div className='home-featured-post__background _ibg'>
					<img
						src='/img/home/featuredPostBack.jpg'
						alt='Featured Post Background' />
				</div>
				<div className='home-featured-post__overlay'></div>
			</section>
		</div>
	)
}

export default Home;