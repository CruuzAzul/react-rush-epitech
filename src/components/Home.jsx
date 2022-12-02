import '@sass/content/home/home.scss';

import React from 'react';

import logo from '../assets/images/logo.svg';

function Home() {
	return (
		<div className="home">
			<header className="home-header">
				<img src={logo} className="home-logo" alt="logo" />
			</header>
		</div>
	);
}

export default Home;
