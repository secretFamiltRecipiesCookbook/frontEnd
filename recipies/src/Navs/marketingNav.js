import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.div`
	z-index: 10;

	nav {
		min-height: 8vh;
		background: linear-gradient(to right, #ccbe1d, #fc9471);
	}

	.nav-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		margin: 0 auto;
	}

	.logo {
		color: #e1e2e0;
		text-transform: uppercase;
		letter-spacing: 5px;
		font-size: 30px;
		align-items: center;
	}

	.nav-links {
		display: flex;
		justify-content: space-around;
		width: 40%;
        color: rgb(226, 226, 226);
		color: #e1e2e0;
		text-decoration: none;
		letter-spacing: 3px;
		font-weight: bold;
		font-size: 24px;
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
			width: 60%;
		}
	}

	/* @media screen and (max-width: 950px) {
		.nav-links {
			width: 100%;
		}
	} */

	/* MOBILE DESIGN  */
	@media screen and (max-width: 768px) {
		body {
			overflow-x: hidden;
		}

		.nav-links {
			position: absolute;
			right: 0px;
			height: 92vh;
			top: 6.7vh;
			background: linear-gradient(to right, #e1ac44, #fc9471);
			display: flex;
			flex-direction: column;
			justify-content: space-around;
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
		z-index: 5;
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


export default function MarketingNav() {


	return (
		<Nav>
			<nav key={Math.random()}>
				<div className="nav-content">
					<div id="logo-space">
						<h3 className="logo">ReciPeazy</h3>
					</div>
                    <NavLink to='/login' style={{textDecoration:'none'}}>
                <section className = 'nav-links'>Login</section>
            </NavLink>
            <NavLink to ='/signup' style={{textDecoration:'none'}}>
                <section className = 'nav-links'>Sign Up</section>
            </NavLink>
				</div>
			</nav>
		</Nav>
	);
}
