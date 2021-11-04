import Head from 'next/head'
import Header from '../components/Header'
import ScrollOut from 'scroll-out'

// ScrollOut({
// 	scrollingElement: '.container',
// 	onShown: function (el) {
// 		el.animate([{opacity: 0}, {opacity: 1}], 1500)
// 	},
// 	onHidden: function (el) {
// 		el.animate([{opacity: 1}, {opacity: 0}], 1500)
// 	},
// })

export default function Home() {
	// const overlay = window.querySelector('.overlay')
	// const overlayClose = window.querySelector('.overlay__close')

	// const openMenu = window.querySelectorAll('.open-menu')
	// openMenu.forEach(menuBtn => {
	// 	menuBtn.addEventListener('click', e => {
	// 		overlay.classList.add('show')
	// 	})
	// })
	// overlayClose.addEventListener('click', e => {
	// 	overlay.classList.remove('show')
	// })

	return (
		<div classNameName='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='../public/images/favicon.ico' />
			</Head>
			<Header />

			<main classNameName='container'>
				<section className='container__section' id='one'>
					<div
						className='container__content'
						data-scroll
						id='content-one'
					>
						<div className='container__content-header'>
							<h2>Forza F1</h2>
							<p>Order Online for Touchless Delivery</p>
						</div>
						<div className='container__content-footer'>
							<button className='btn btn-dark'>
								Custom order
							</button>
							<button className='btn btn-light ml'>
								Existing inventory
							</button>
							<img
								className='container__down-arrow py-8'
								src='./images/down-arrow.svg'
								width='70'
							/>
						</div>
					</div>
				</section>
				<section className='container__section' id='two'>
					<div
						className='container__content'
						data-scroll
						id='content-two'
					>
						<div className='container__content-header'>
							<h2>Model Y</h2>
							<p>Order Online for Touchless Delivery</p>
						</div>
						<div className='container__content-footer'>
							<button className='btn btn-dark'>
								Custom order
							</button>
							<button className='btn btn-light ml'>
								Existing inventory
							</button>
						</div>
					</div>
				</section>
				<section className='container__section' id='three'>
					<div
						className='container__content'
						data-scroll
						id='content-three'
					>
						<div className='container__content-header'>
							<h2>Forza F1</h2>
							<p>Order Online for Touchless Delivery</p>
						</div>
						<div className='container__content-footer'>
							<button className='btn btn-dark'>
								Custom order
							</button>
							<button className='btn btn-light ml'>
								Existing inventory
							</button>
						</div>
					</div>
				</section>
			</main>

			<div className='overlay'>
				<div className='overlay__menu'>
					<div className='overlay__close'>
						<span>&times;</span>
					</div>
					<ul>
						<li>Model S</li>
						<li>Model 3</li>
						<li>Model X</li>
						<li>Model Y</li>
						<li>Solar Roof</li>
						<li>Solar Panels</li>
						<li>Existing Inventory</li>
						<li>Used Inventory</li>
						<li>Trade-In</li>
						<li>Charging</li>
						<li>Find Us</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
