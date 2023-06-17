import React from 'react';
import '../components/Hero.css';

const Hero = () => {
	return (
		<section className='hero-wrapper'>
			<div className='padding innerWidth flexCenter hero-container'>
				{/* Left Side  */}
				<div className='flexColStart hero-left'>
					<div className='hero-title'>
						<div className='orange-circle' />
						<h1>
							Discover <br /> Most Suitable Property
						</h1>
					</div>
					<div className='flexColStart hero-des'>
						<span>
							Find a variety of properties that suit you every
							easilty
						</span>
						<span>
							Forget all difficulties in finding a residence for
							you
						</span>
					</div>
					<div className='search-bar'>Search bar</div>
				</div>
				{/* Right Side  */}
				<div className='flexCenter hero-right'>
					<div className='image-container'>
						<img src='./hero-image.png' alt='' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
