import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import classNames from 'classnames';

const PageContainer = ({
	children,
	className,
	...rest
}) => {
	return (
		<div className={classNames("w-11/12 lg:w-5/6 mx-auto", className)} {...rest}>
			<motion.div
				className="w-full flex flex-col items-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				{children}
			</motion.div>
		</div>
	);
};

PageContainer.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
};

export default PageContainer;
