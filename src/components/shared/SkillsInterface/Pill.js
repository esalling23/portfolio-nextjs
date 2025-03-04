import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';

import './styles.scss'

const Pill = ({ name }) => {
	return (
		<motion.div 
			className="pill flex items-center content-center text-black background-color-bright"
			whileHover={{ 
				scale: 1.1, 
				duration: 0.5,
				transition: {
					duration: 0.5,
					repeat: Infinity, 
					repeatType: 'reverse',
					repeatDelay: 0.3
				}
			}}
		>
			{name}
		</motion.div>
	);
};

Pill.propTypes = {
	name: PropTypes.string,
};

export default Pill;