'use client'
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

const SectionContainer = ({
	id,
	children,
	className = '',
	...rest
}) => {
	return (
		<section 
			id={id}
			className={classNames(
				'w-full m-0 flex flex-row justify-start items-stretch flex-wrap',
				styles.sectionContainer,
				className,
			)} 
			{...rest}
		>
			{children}
		</section>
	);
};

SectionContainer.propTypes = {
	id: PropTypes.string,
	children: PropTypes.any,
	className: PropTypes.string,
};

export default SectionContainer;