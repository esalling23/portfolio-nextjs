'use client'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'motion/react';

import styles from './styles.module.scss';

const SectionBox = ({
	children,
	className,
	...rest
}) => {
	return <section 
		className={classNames(
			styles.sectionBox,
			'w-full md:w-1/2 flex flex-col',
			className,
		)}
		{...rest}
	>
		<motion.div
			initial={{ opacity: 0, }}
			whileInView={{ opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }}
			viewport={{ once: true, amount: .25 }}
			className={classNames(styles.content, 'flex flex-col')}
		>
			{children || ''}
		</motion.div>
	</section>;
};

SectionBox.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

export default SectionBox;