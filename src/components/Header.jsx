import classNames from 'classnames';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
	const [active, setActive] = useState(false);
	const burgerClassname = classNames('burger', { '_active': active });
	return (
		<header className='header'>
			<div className='header__container _container'>
				<Link to='/'><img src='/img/logo.png' alt='Logo' /></Link>
				<div className='header__actions'>
					<nav className='header__menu menu'>
						<ul className='menu__list'>
							<li className='menu__item'>
								<Link to='/'>Home</Link>
							</li>
							<li className='menu__item'>
								<Link to='/blog'>Blog</Link>
							</li>
							<li className='menu__item'>
								<Link to='/about'>About Us</Link>
							</li>
							<li className='menu__item'>
								<Link to='/contact'>Contact Us</Link>
							</li>
						</ul>
					</nav>
					<button className='header__button button'>Subscribe</button>
				</div>
				<div
					className={burgerClassname}
					onClick={() => setActive(!active)}
				>
					<span></span>
				</div>
			</div>
		</header>
	)
}

export default Header;