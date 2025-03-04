import React from 'react';
import PropTypes from 'prop-types';

const SinglePageLayout = ({
	children
}) => {
	return (
		<div className='container-fluid m-0 p-0 flex flex-col w-full justify-start'>
			{children}
		</div>
	);
};

SinglePageLayout.propTypes = {
	children: PropTypes.any,
};

export default SinglePageLayout;
