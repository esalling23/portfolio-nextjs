import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AppButton = ({
	children,
	className,
  ...rest
}) => {
	return (
		<button
			className={classNames(
				'px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600',
				className
			)}
      {...rest}
		>
			{children}
		</button>
	);
};

AppButton.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

export default AppButton;
