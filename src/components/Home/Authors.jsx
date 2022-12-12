import React from 'react'
import { Link } from 'react-router-dom';

function Authors() {
	return (
		<div className='authors__container _container'>
			<h2 className='authors__title'>Choose A Catagory</h2>
			<ul className='authors__list'>
				<li className='authors__item'>
					<Link to='/' className='authors__link'>
						<div className='authors__photo'>
							<img src='/img/authors/author1.png' alt='Author' />
						</div>
						<div className='authors__name'>Floyd Miles</div>
						<div className='authors__proffesion'>
							Content Writer @Company
						</div>
						<div className='authors__socials'>
							<Link to='/'>
								<img src='/img/iconsDark/facebook.svg' alt='LinkedId' />
							</Link>
							<Link to='/'>
								<img src='/img/iconsDark/twitter.svg' alt='LinkedId' />
							</Link>
							<Link to='/'>
								<img src='/img/iconsDark/instagram.svg' alt='LinkedId' />
							</Link>
							<Link to='/'>
								<img src='/img/iconsDark/linkedIn.svg' alt='LinkedId' />
							</Link>
						</div>
					</Link>
				</li>
				<li className='authors__item'>
					<Link to='/' className='authors__link'>
						<div className='authors__photo'>
							<img src='/img/authors/author2.png' alt='Author' />
						</div>
						<div className='authors__name'>Dianne Russell</div>
						<div className='authors__proffesion'>
							Content Writer @Company
						</div>
						<div className='authors__socials'>
							<Link to='/'>
								<img src='/img/iconsDark/facebook.svg' alt='LinkedId' />
							</Link>
							<Link to='/'>
								<img src='/img/iconsDark/twitter.svg' alt='LinkedId' />
							</Link>
							<Link to='/'>
								<img src='/img/iconsDark/instagram.svg' alt='LinkedId' />
							</Link>
							<Link to='/'>
								<img src='/img/iconsDark/linkedIn.svg' alt='LinkedId' />
							</Link>
						</div>
					</Link>
				</li>
				<li className='authors__item'>
					<Link to='/' className='authors__link'>
						<div className='authors__photo'>
							<img src='/img/authors/author3.png' alt='Author' />
						</div>
						<div className='authors__name'>Jenny Wilson</div>
						<div className='authors__proffesion'>
							Content Writer @Company
						</div>
						<div className='authors__socials'>
							<Link to='/'>
								<img src='/img/iconsDark/facebook.svg' alt='LinkedId' />
							</Link>
							<Link to='/'>
								<img src='/img/iconsDark/twitter.svg' alt='LinkedId' />
							</Link>
							<Link to='/'>
								<img src='/img/iconsDark/instagram.svg' alt='LinkedId' />
							</Link>
							<Link to='/'>
								<img src='/img/iconsDark/linkedIn.svg' alt='LinkedId' />
							</Link>
						</div>
					</Link>
				</li>
				<li className='authors__item'>
					<Link to='/' className='authors__link'>
						<div className='authors__photo'>
							<img src='/img/authors/author4.png' alt='Author' />
						</div>
						<div className='authors__name'>Leslie Alexander</div>
						<div className='authors__proffesion'>
							Content Writer @Company
						</div>
						<div className='authors__socials'>
							<Link to='/'>
								<img src='/img/iconsDark/facebook.svg' alt='LinkedId' />
							</Link>
							<Link to='/'>
								<img src='/img/iconsDark/twitter.svg' alt='LinkedId' />
							</Link>
							<Link to='/'>
								<img src='/img/iconsDark/instagram.svg' alt='LinkedId' />
							</Link>
							<Link to='/'>
								<img src='/img/iconsDark/linkedIn.svg' alt='LinkedId' />
							</Link>
						</div>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Authors;