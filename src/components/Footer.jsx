import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container _container'>
				<div className='footer__head footer-head'>
					<Link to='/' className='footer-head__logo'>
						<img src='/img/logo.png' alt='Logo' />
					</Link>
					<nav className='footer-head__menu menu-footer'>
						<ul className='menu-footer__list'>
							<li className='menu-footer__item'>
								<Link to='/'>Home</Link>
							</li>
							<li className='menu-footer__item'>
								<Link to='/blog'>Blog</Link>
							</li>
							<li className='menu-footer__item'>
								<Link to='/about'>About Us</Link>
							</li>
							<li className='menu-footer__item'>
								<Link to='/contact'>Contact Us</Link>
							</li>
							<li className='menu-footer__item'>
								<Link to='/privacy'>Privacy Policy</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className='footer__subscribe subscribe-footer'>
					<h2 className='subscribe-footer__title'>
						Subscribe to our news letter to get latest updates and news
					</h2>
					<form className='subscribe-footer__form'>
						<div className='subscribe-footer__input'>
							<input
								type='email'
								className='subscribe-footer__field'
								placeholder='Enter Your Email'
								name='subscribe-footer__field'
							/>
						</div>
						<button
							className='subscribe-footer__button button button_yellow'
						>
							Subscribe
						</button>
					</form>
				</div>
				<div className='footer__references references-footer'>
					<div className='references-footer__contacts'>
						<div className='references-footer__contact'>Finstreet 118 2561 Fintown</div>
						<div className='references-footer__contact'>Hello@finsweet.com  020 7993 2905</div>
					</div>
					<div className='references-footer__socials'>
						<Link to='/'>
							<img src='/img/icons/facebook.svg' alt='LinkedId' />
						</Link>
						<Link to='/'>
							<img src='/img/icons/twitter.svg' alt='LinkedId' />
						</Link>
						<Link to='/'>
							<img src='/img/icons/instagram.svg' alt='LinkedId' />
						</Link>
						<Link to='/'>
							<img src='/img/icons/linkedIn.svg' alt='LinkedIn' />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;