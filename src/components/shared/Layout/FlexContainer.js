import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FlexContainer = ({
	children, 
	isFullScreen = false
}) => {

	return <div 
		className={classNames(
			'flex justify-center items-center', 
			{ 'w-full': isFullScreen, 'h-full': isFullScreen }
		)}
	>
		{children}
	</div>;
};

FlexContainer.propTypes = {
	children: PropTypes.any,
	isFullScreen: PropTypes.bool
};

export default FlexContainer;