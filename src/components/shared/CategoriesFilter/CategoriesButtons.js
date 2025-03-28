import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { getCategoryId } from '../../../lib/utils';
import styles from './styles.module.scss';
import SectionContainer from '../SectionContainer';
import classNames from 'classnames';
import BadgeButton from '../Badge/BadgeButton';

const CategoriesButtons = ({
	categories,
	handleFilter,
	activeKeys,
}) => {
	const displayCategoryButton = ({ name, id, key }) => (
		<BadgeButton 
			className="mx-1"
			onClick={() => {
				document.activeElement.blur();
				handleFilter(id);
			}}
			key={key}
			text={name}
			isSelected={activeKeys.includes(id)}
			// icon={}
		/>
	);
	const displayTagButtons = tags => tags?.map(({ name, id }) => 
		displayCategoryButton({ 
			name, 
			id: getCategoryId(id),
			key: uuid()
		}));
	
	const categoryButtons = displayTagButtons(categories);
	
	return (
		<SectionContainer 
			className={classNames(
				'background-color-accent-2 py-3 flex-col justify-center align-content-center',
				styles.categoryButtonContainer
			)}
		>
			<div className="flex flex-col">
				<div className="p-2 flex flex-wrap justify-center">
					{categoryButtons}
				</div>
			</div>
		</SectionContainer>
	);
};

CategoriesButtons.propTypes = {
	categories: PropTypes.array,
	activeKeys: PropTypes.arrayOf(PropTypes.string),
	handleFilter: PropTypes.func
};

export default CategoriesButtons;