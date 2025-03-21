'use client'
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'motion/react';

import styles from './pixelBlocks.module.scss';
import DotDotDotAnim from './DotDotDotAnim';

const PixelLoader = ({
	isLoading,
	handleAnimComplete = () => {},
	handleAnimExited = () => {}
}) => {
	const [shouldAnimate, setShouldAnimate] = useState(true);

	useEffect(() => {
		if (!shouldAnimate && isLoading) {
			setShouldAnimate(true);
		}
		else if (shouldAnimate && !isLoading)
		{
			setShouldAnimate(false);
		}
	}, [shouldAnimate, isLoading]);

	return (
		<AnimatePresence className={styles.loaderContainer}>
			<DotDotDotAnim
				shouldAnimate={shouldAnimate}
				handleAnimComplete={handleAnimComplete}
				handleAnimExited={handleAnimExited}
			/>
		</AnimatePresence>
	);
};

PixelLoader.propTypes = {
	handleAnimComplete: PropTypes.func,
	handleAnimExited: PropTypes.func,
	isLoading: PropTypes.bool
};

export default PixelLoader;