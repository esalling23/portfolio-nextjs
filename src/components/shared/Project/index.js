import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';
import classNames from 'classnames';

import { 
  // formatDate, 
  getCategoryId 
} from '@/lib/utils';
import BadgeLink from '../Badge/BadgeLink';
import Card from './Card';

import './styles.scss'

const Project = ({
	title,
	subtitle,
	// dateStarted,
	// dateEnded,
	gitLink,
	moreLink,
	mainImg,
	categories,
	handleContentLoaded,
}) => {
	const imageRef = useRef(null);
  const [isHover, setIsHover] = useState(false)

	// const dateRange = (
	// 	<h5 className="text-sm">
	// 		({formatDate(dateStarted)}{' - '}{dateEnded ? formatDate(dateEnded) : 'Current'})
	// 	</h5>
	// );

	const categoryTags = categories.map(({ name }) => (
		<span
			key={name}
			className="bg-gray-700 text-white px-2 py-1 rounded-md text-xs"
		>
			#{name}
		</span>
	));

	const categoryClasses = categories.map(({ id }) => getCategoryId(id)).join(' ');

	return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 h-80 my-4 projectContainer">
      <Card 
        className={classNames(categoryClasses, "filter-item w-full h-full relative")}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div 
          className="flex flex-col justify-start absolute p-3 w-full h-full"
        >
          <h2 className="text-[1.6rem] font-bold text-center">
            {title}
          </h2>
          {/* <div className="mt-2 text-center">{dateRange}</div> */}
          <h5 className="text-black">{subtitle}</h5>
          <div className="mt-2 flex flex-row flex-wrap gap-1">{categoryTags}</div>
          <div className="w-full mt-3 seeMoreLink">
            {/* <p>{description}</p> */}
            {moreLink && <BadgeLink url={moreLink} className="pl-2 seeMoreLink" text={'View Live'} icon={FaLink} />}
            {gitLink && <BadgeLink url={gitLink} className="pl-2 seeMoreLink" text={'View Github'} icon={FaGithub} />}
          </div>
        </div>
        <div 
          className={`flex justify-center absolute w-full h-full z-1 ${isHover && 'invisible'}`}
        >
          <Image
            ref={imageRef}
            src={mainImg}
            alt="Main project image"
            style={{
              objectFit: 'cover'
            }}
            fill
            sizes="100vh"
            onLoad={handleContentLoaded}
            className="rounded-md"
            loading="eager"
          />
        </div>
      </Card>
    </div>
	);
};

Project.propTypes = {
	index: PropTypes.number,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	dateStarted: PropTypes.string,
	dateEnded: PropTypes.string,
	description: PropTypes.string,
	moreLink: PropTypes.string,
	mainImg: PropTypes.string,
	categories: PropTypes.array,
	handleContentLoaded: PropTypes.func,
};

export default Project;
