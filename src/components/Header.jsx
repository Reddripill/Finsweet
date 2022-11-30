import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
	const [active, setActive] = useState(false);
	const burgerClassname = classNames('burger', { '_active': active });
	const headerActionsClassname = classNames('header__actions', {
		'_active': active
	})
	// const bodyClassname = classNames({ '_lock': active });
	useEffect(() => {
		if (active) {
			document.body.classList.add('_lock');
		} else {
			document.body.classList.remove('_lock');
		}
	}, [active]);
	return (
		<header className='header'>
			<div className='header__container _container'>
				<Link to='/' className='header__logo'>
					<img src='/img/logo.png' alt='Logo' />
				</Link>
				<div className={headerActionsClassname}>
					<nav className='header__menu menu-header'>
						<ul className='menu-header__list'>
							<li className='menu-header__item'>
								<Link to='/' onClick={() => setActive(false)}>Home</Link>
							</li>
							<li className='menu-header__item'>
								<Link to='/blog' onClick={() => setActive(false)}>Blog</Link>
							</li>
							<li className='menu-header__item'>
								<Link to='/about' onClick={() => setActive(false)}>About Us</Link>
							</li>
							<li className='menu-header__item'>
								<Link to='/contact' onClick={() => setActive(false)}>Contact Us</Link>
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