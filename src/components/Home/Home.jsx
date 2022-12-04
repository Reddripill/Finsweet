import React from 'react'
import Categories from './Category';
import FeaturedPost from './FeaturedPost';
import HomeAboutUs from './HomeAboutUs';
import HomeAllPosts from './HomeAllPosts';
import Join from './Join';
import HomeStory from './HomeStory';

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
			<section className='home-page__posts home-all-posts'>
				<HomeAllPosts />
			</section>
			<section className='home-page__about home-about-us'>
				<HomeAboutUs />
			</section>
			<section className='home-page__categories categories'>
				<Categories />
			</section>
			<section className='home-page__story home-story'>
				<HomeStory />
			</section>
			<section className='home-page__join join'>
				<Join />
			</section>
		</div>
	)
}

export default Home;