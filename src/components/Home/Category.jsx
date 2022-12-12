import React from 'react'
import { Link } from 'react-router-dom';

function Categories() {
	return (
		<div className='categories__container _container'>
			<h2 className='categories__title'>Choose A Catagory</h2>
			<ul className='categories__list'>
				<li className='categories__item'>
					<Link to='/'>
						<div className='categories__icon'>
							<img src='/img/category/business.svg' alt='Icon of the category' />
						</div>
						<div className='categories__name'>Business</div>
						<div className='categories__text'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
						</div>
					</Link>
				</li>
				<li className='categories__item'>
					<Link to='/'>
						<div className='categories__icon'>
							<img src='/img/category/economy.svg' alt='Icon of the category' />
						</div>
						<div className='categories__name'>Startup</div>
						<div className='categories__text'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
						</div>
					</Link>
				</li>
				<li className='categories__item'>
					<Link to='/'>
						<div className='categories__icon'>
							<img src='/img/category/economy.svg' alt='Icon of the category' />
						</div>
						<div className='categories__name'>Economy</div>
						<div className='categories__text'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
						</div>
					</Link>
				</li>
				<li className='categories__item'>
					<Link to='/'>
						<div className='categories__icon'>
							<img src='/img/category/technology.svg' alt='Icon of the category' />
						</div>
						<div className='categories__name'>Technology</div>
						<div className='categories__text'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
						</div>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Categories;