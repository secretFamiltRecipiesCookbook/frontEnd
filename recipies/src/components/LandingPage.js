import React from 'react';
import styled from 'styled-components';
import MarketingNav from '../Navs/marketingNav';

const LandingPageStyle = styled.div`
	width: 100%;

	.hero {
		height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: center / cover;
		background-image: url('https://www.motherjones.com/wp-content/uploads/2018/11/20181119-thanksgiving-master.jpg?w=990');
	}

	.pageTitle {
		color: white;
		font-size: 8rem;
	}

	.cta-btn {
		background-color: #ccbe1d;
		font-size: 2rem;
		color: white;
		padding: 1rem 1.5rem;
		border: none;
		border-radius: 30px;
	}
`;

export default function LandingPage() {
	return (
		<LandingPageStyle>
			<MarketingNav />
			<section className="hero">
				<h1 className="pageTitle">ReciPeazy</h1>
			</section>
		</LandingPageStyle>
	);
}
