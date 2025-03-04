import React from 'react';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';

import './styles.scss'
import Link from 'next/link';

const HeaderLink = ({ to, text }) => (
	<Link
    href={to}
    shallow={true}
    className="border-0 px-4 py-2"
  >
		{text}
	</Link>
);

HeaderLink.propTypes = {
	to: PropTypes.string,
	text: PropTypes.string,
	isSelected: PropTypes.bool,
};

function Header () {
	return (
		<header className="px-4 py-3 w-full fixed background-color-accent flex justify-center">
			<nav className="p-0 md:w-2/3 lg:w-1/2 flex items-center justify-center space-x-4">
				<HeaderLink key="home-link" to="/#home" text="Home" />
				<FaCircle key="circle-1" size={10} className="text-black" />
				<HeaderLink key="about-link" to="/#about" text="Me" />
				<FaCircle key="circle-2" size={10} className="text-black" />
				<HeaderLink key="portfolio-link" to="#portfolio" text="Work" />
			</nav>
		</header>
	);
};

export default Header;