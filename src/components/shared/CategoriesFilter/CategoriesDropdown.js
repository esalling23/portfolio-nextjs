import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { getCategoryId } from '../../../lib/utils';

const CategoriesDropdown = ({
	categories,
	isLoading = false,
	handleFilter
}) => {
	const displayCategoryButton = ({ name, id }) => (
		<button
			key={id}
			onClick={() => handleFilter(id)}
			className="block w-full text-left px-4 py-2 hover:bg-gray-200"
		>
			{name}
		</button>
	);

	const categoryTags = categories?.map(({ name, id }) => 
		displayCategoryButton({ name, id: getCategoryId(id) })
	);

	return (
		<div className="relative inline-block text-left">
			<div>
				<button
					className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 flex items-center"
					disabled={isLoading}
				>
					{isLoading ? <FaSpinner className="animate-spin mr-2" /> : 'Filter Projects'}
				</button>
			</div>
			<div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
				{!isLoading && (
					<>
						{displayCategoryButton({ name: 'All Projects', id: '*' })}
						{categoryTags}
					</>
				)}
			</div>
		</div>
	);
};

CategoriesDropdown.propTypes = {
	categories: PropTypes.array,
	isLoading: PropTypes.bool,
	handleFilter: PropTypes.func
};

export default CategoriesDropdown;
