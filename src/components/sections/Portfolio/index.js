'use client'
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Project from '@/components/shared/Project';
import SectionContainer from '@/components/shared/SectionContainer';

// const asterisk = '*';

const Portfolio = ({ 
  projects, 
  // categories
}) => {
	// const isotope = useRef(null);
	// const [filterKey, setFilterKey] = useState(asterisk);

	// const handleFilterKeyChange = key => {
	// 	setFilterKey(curr => {
	// 		if (key === asterisk) return asterisk;
	// 		let keys = curr.split('.');
	// 		if (curr === asterisk) keys = [];
	// 		if (keys.includes(key)) {
	// 			keys = keys.filter(k => k !== key);
	// 		} else {
	// 			keys.push(key);
	// 		}
	// 		return keys.length === 0 ? asterisk : keys.join('.');
	// 	});
	// };

	const projectList = projects?.map((project, i) => (
		<Project
			key={`project-${project.id}`}
			index={i}
			title={project.title}
			subtitle={project.subtitle}
			dateStarted={project.date_started}
			dateEnded={project.date_ended}
			description={project.description}
			moreLink={project.more_link}
			gitLink={project.git_link}
			mainImg={project.main_img_safe}
			thumbnailImg={project.thumbnail_img_safe}
			categories={project.categories}
			// handleResize={() => isotope.current?.layout()}
		/>
	));

	// const categoriesDisplay = (
	// 	<CategoriesFilter
	// 		activeKeys={filterKey.split('.')}
	// 		categories={categories}
	// 		handleFilter={handleFilterKeyChange}
	// 		key="categories-display"
	// 	/>
	// );

	return (
		<SectionContainer id="portfolio" className="background-color-peachy-light">
			{/* {categoriesDisplay} */}
      <div className="background-color-accent-2 py-3 w-full h-40 flex flex-col justify-center items-center">
        <h2 className="text-center text-white text-title">Work</h2>
        <h3 className="text-color-accent-light">Hover to see project details</h3>
      </div>
			<div
				className={classNames(
					'w-full flex flex-row flex-wrap justify-start p-4 py-8',
					// { 'h-[60vh] overflow-hidden': !displayContent }
				)}
			>
        {/* <AnimatePresence> */}
          {projectList || ''}
        {/* </AnimatePresence> */}
			</div>
		</SectionContainer>
	);
};

Portfolio.propTypes = {
	projects: PropTypes.array,
	categories: PropTypes.array,
};

export default Portfolio;
