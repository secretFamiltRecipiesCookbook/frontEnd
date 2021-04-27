import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-family: 'Poppins', sans-serif;
		min-height: 8vh;
		background: linear-gradient(to right, #ccbe1d, #fc9471);
	}

	.logo {
		color: #e1e2e0;
		text-transform: uppercase;
		letter-spacing: 5px;
		font-size: 20px;
	}

	.nav-links {
		display: flex;
		justify-content: space-around;
		width: 30%;
	}

	.nav-links li {
		list-style: none;
	}

	.nav-links a {
		color: rgb(226, 226, 226);
		color: #e1e2e0;
		text-decoration: none;
		letter-spacing: 3px;
		font-weight: bold;
		font-size: 14px;
	}

	.burger {
		display: none;
	}

	.burger div {
		width: 25px;
		height: 3px;
		background-color: rgb(226, 226, 226);
		margin: 5px;
		transition: all 0.3s ease;
	}

	/* TABLET ZONE */
	@media screen and (max-width: 1024px) {
		.nav-links {
			width: 40%;
		}
	}

	/* MOBILE DESIGN  */
	@media screen and (max-width: 768px) {
		body {
			overflow-x: hidden;
		}

		.nav-links {
			position: absolute;
			right: 0px;
			height: 92vh;
			top: 8vh;
			background-color: #5d5d5d;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 50%;
			transform: translateX(100%);
			transition: transform 0.5s ease-in;
		}
		.nav-links li {
			opacity: 0;
		}
		.burger {
			display: block;
			cursor: pointer;
		}
	}

	/* ANIMATIONS  */
	.nav-active {
		transform: translateX(0%);
	}

	@keyframes navLinkFade {
		from {
			opacity: 0;
			transform: translateX(50px);
		}
		to {
			opacity: 1;
			transform: translateX(0px);
		}
	}

	.toggle .line1 {
		transform: rotate(-45deg) translate(-5px, 6px);
	}
	.toggle .line2 {
		opacity: 0;
	}
	.toggle .line3 {
		transform: rotate(45deg) translate(-5px, -6px);
	}
`;

const linkNames = ['Home', 'Search', 'Log In', 'Sign Up'];

export default function NavBarWx() {
	const [isActive, setIsActive] = useState(true);

	return (
		<Nav>
			<nav>
				<div id="logo-space">
					<h3 className="logo">The Logo</h3>
				</div>
				<ul className={isActive ? 'nav-links' : 'nav-links nav-active'}>
					{/* {linkNames.map((linkName, index) => {
						return <NavBarWxLink key={index} isActive={isActive} index={index} name={linkNames[index]} />;
					})} */}
					{linkNames.map((linkName, index) => {
						return (
							<>
								<li
									key="index"
									style={
										isActive
											? { animation: '' }
											: { animation: `navLinkFade 0.5s ease forwards ${index / 7 + 0.15}s` }
									}
								>
									<a href="www.google.com">{linkName}</a>
								</li>
							</>
						);
					})}
				</ul>
				<div className={isActive ? 'burger' : 'burger toggle'} onClick={() => setIsActive(!isActive)}>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</nav>
		</Nav>
	);
}
