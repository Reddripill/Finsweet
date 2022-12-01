import React from 'react'
import { Link } from 'react-router-dom';

function HomeAllPosts() {
	return (
		<div className='home-all-posts__container _container'>
			<div className='home-all-posts__featured home-all-posts-featured'>
				<h2 className='home-all-posts-featured__title'>Featured Post</h2>
				<div className='home-all-posts-featured__card'>
					<div className='home-all-posts-featured__image _ibg'>
						<img src='/img/home/featuredPosts.jpg' alt="Hotel" />
					</div>
					<div className='home-all-posts-featured__info'>
						<div className='home-all-posts-featured__author'>
							By <span>John Doe</span>
						</div>
						<div className='home-all-posts-featured__date'>
							May 23, 2022
						</div>
					</div>
					<div className='home-all-posts-featured__name'>
						Lorem ipsum dolor sit amet, consectetur adipiscing
						elit,	sed do eiusmod tempor.
					</div>
					<div className='home-all-posts-featured__excerpt'>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
					</div>
					<Link to='/' className='home-all-posts-featured__button button button_yellow'>
						{'Read More >'}
					</Link>
				</div>
			</div>
			<aside className='home-all-posts__list home-all-posts-list'>
				<div className='home-all-posts-list__head'>
					<h2 className='home-all-posts-list__title'>All Posts</h2>
					<Link to='/blog' className='home-all-posts-list__view view'>View All</Link>
				</div>
				<div className='home-all-posts-list__body'>
					<ul className='home-all-posts-list__list'>
						<li className='home-all-posts-list__item'>
							<Link to='/post/:postId' className='home-all-posts-list__link'>
								<div className='home-all-posts-list__info'>
									<div className='home-all-posts-list__author'>
										By <span>John Deo</span>
									</div>
									<div className='home-all-posts-list__date'>
										Aug 23, 2021
									</div>
								</div>
								<div className='home-all-posts-list__name'>
									8 Figma design systems that you can download for free today.
								</div>
							</Link>
						</li>
						<li className='home-all-posts-list__item'>
							<Link to='/post/:postId' className='home-all-posts-list__link'>
								<div className='home-all-posts-list__info'>
									<div className='home-all-posts-list__author'>
										By <span>John Deo</span>
									</div>
									<div className='home-all-posts-list__date'>
										Aug 23, 2021
									</div>
								</div>
								<div className='home-all-posts-list__name'>
									8 Figma design systems that you can download for free today.
								</div>
							</Link>
						</li>
						<li className='home-all-posts-list__item'>
							<Link to='/post/:postId' className='home-all-posts-list__link'>
								<div className='home-all-posts-list__info'>
									<div className='home-all-posts-list__author'>
										By <span>John Deo</span>
									</div>
									<div className='home-all-posts-list__date'>
										Aug 23, 2021
									</div>
								</div>
								<div className='home-all-posts-list__name'>
									8 Figma design systems that you can download for free today.
								</div>
							</Link>
						</li>
						<li className='home-all-posts-list__item'>
							<Link to='/post/:postId' className='home-all-posts-list__link'>
								<div className='home-all-posts-list__info'>
									<div className='home-all-posts-list__author'>
										By <span>John Deo</span>
									</div>
									<div className='home-all-posts-list__date'>
										Aug 23, 2021
									</div>
								</div>
								<div className='home-all-posts-list__name'>
									8 Figma design systems that you can download for free today.
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	)
}

export default HomeAllPosts;