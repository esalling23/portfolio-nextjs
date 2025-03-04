import React, { useRef } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import classNames from 'classnames';

import SeeMoreText from './SeeMoreText';
import { formatDate, getCategoryId } from '../../lib/utils';
import BadgeLink from './BadgeLink';

const ARCADE_HEIGHT = 400;
const ARCADE_WIDTH = 300;

const MetaProject = ({
	title,
	dateStarted,
	dateEnded,
	description,
	moreLink,
	mainImg,
	categories,
	handleContentLoaded,
	handleResize
}) => {
	const imageRef = useRef(null);

	const dateRange = (
		<h5 className="inline text-lg">
			({formatDate(dateStarted)}{' - '}{dateEnded ? formatDate(dateEnded) : 'Current'})
		</h5>
	);

	const categoryTags = categories.map(({ name }) => (
		<span
			key={name}
			className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm mr-2"
		>
			#{name}
		</span>
	));

	const categoryClasses = categories.map(({ id }) => getCategoryId(id)).join(' ');

	return (
		<div
			className={classNames(
				`border-2 border-black bg-gray-500 p-5 project-container ${categoryClasses}`,
				`h-[${ARCADE_HEIGHT}px] w-[${ARCADE_WIDTH}px]`
			)}
		>
			<h2 className="text-xl font-bold">{title}</h2>
			<div className="flex flex-wrap items-center mt-2">
				{dateRange}
				{moreLink && (
					<BadgeLink url={moreLink} className="ml-3">
						<FaExternalLinkAlt />
					</BadgeLink>
				)}
			</div>
			<div className="mt-2">{categoryTags}</div>
			<div className="flex flex-col lg:flex-row mt-4">
				<div className="lg:w-1/2 my-2">
					<Image
						ref={imageRef}
						src={mainImg}
						alt="Main project image"
						width={ARCADE_WIDTH}
						height={ARCADE_HEIGHT}
						onLoad={handleContentLoaded}
						className="rounded-md object-cover"
					/>
				</div>
				<div className="lg:w-1/2 my-2">
					<SeeMoreText text={description} onToggle={handleResize} />
				</div>
			</div>
		</div>
	);
};

export default MetaProject;
