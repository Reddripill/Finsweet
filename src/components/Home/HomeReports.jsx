import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function HomeReports() {
	return (
		<div className='home-reports__container _container'>
			<div className='home-reports__wrapper'>
				<div className='home-reports__head reports-header'>
					<div className='reports-header__wrapper'>
						<div className='reports-header__name'>TESTIMONIALS</div>
						<h2 className='reports-header__title'>
							What people say about our blog
						</h2>
						<div className='reports-header__text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
						</div>
					</div>
				</div>
				<div className='home-reports__slider slider-reports'>
					<Swiper
						className='slider-reports__wrapper'
						spaceBetween={20}
						slidesPerView={1}
						modules={[Navigation]}
						navigation={{
							prevEl: '.slider-reports__button_prev',
							nextEl: '.slider-reports__button_next'
						}}
						loop={false}
					>
						<SwiperSlide className='slider-reports__item'>
							<div className='slider-reports__text'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</div>
							<div className='slider-reports__person'>
								<div className='slider-reports__photo'>
									<img src='img/reportsPhoto.png' alt='Person' />
								</div>
								<div className='slider-reports__info'>
									<div className='slider-reports__name'>Jonathan Vallem</div>
									<div className='slider-reports__location'>New york, USA</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className='slider-reports__item'>
							<div className='slider-reports__text'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</div>
							<div className='slider-reports__person'>
								<div className='slider-reports__photo'>
									<img src='img/reportsPhoto.png' alt='Person' />
								</div>
								<div className='slider-reports__info'>
									<div className='slider-reports__name'>Jonathan Vallem</div>
									<div className='slider-reports__location'>New york, USA</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className='slider-reports__item'>
							<div className='slider-reports__text'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</div>
							<div className='slider-reports__person'>
								<div className='slider-reports__photo'>
									<img src='img/reportsPhoto.png' alt='Person' />
								</div>
								<div className='slider-reports__info'>
									<div className='slider-reports__name'>Jonathan Vallem</div>
									<div className='slider-reports__location'>New york, USA</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className='slider-reports__navigation'>
						<div className='slider-reports__button _icon-arrow slider-reports__button_prev'></div>
						<div className='slider-reports__button _icon-arrow slider-reports__button_next'></div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default HomeReports;