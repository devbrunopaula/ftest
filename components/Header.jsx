import React from 'react'

export default function Header() {
	return (
		<header class='header'>
			<div class='header__announcement'>
				<a href='#'>Read Tesla's 2020 Impact Report</a>
			</div>
			<div class='header__nav-section'>
				<div>
					<img
						class='header__logo'
						src='images/tesla-logo.svg'
						width='120'
					/>
				</div>
				<div>
					<nav class='header__nav header__nav--main'>
						<a href='#'>Model S</a>
						<a href='#'>Model 3</a>
						<a href='#'>Model X</a>
						<a href='#'>Model Y</a>
						<a href='#'>Solar Roof</a>
						<a href='#'>Solar Panel</a>
						<div class='header__min-slider'></div>
					</nav>
				</div>
				<div>
					<nav class='header__nav header__nav--sub'>
						<a href='#'>Shop</a>
						<a href='#'>Account</a>
						<a href='#' class='open-menu'>
							Menu
						</a>
					</nav>
					<nav class='header__nav header__nav--mobile'>
						<a href='#' class='open-menu'>
							Menu
						</a>
					</nav>
				</div>
			</div>
		</header>
	)
}
