import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import classNames from 'classnames';

const BadgeLink = ({
	icon: IconComponent,
	text,
	url='',
	className,
	...rest
}) => {
	return (
		<a
			target="_blank"
			href={url}
			rel="noreferrer"
			className={classNames(
        'block flex flex-row justify-start items-center min-w-fit w-fit px-1 mt-1',
        styles.badgeLink, 
        className
      )}
			{...rest}
		>
			{IconComponent && <IconComponent />}
			{text && <span className="ml-1 d-none d-md-inline">{text}</span>}
		</a>
	);
};

BadgeLink.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	text: PropTypes.string,
	icon: PropTypes.object,
	url: PropTypes.string
};

export default BadgeLink;
