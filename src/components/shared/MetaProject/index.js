import React from 'react';
import Image from 'next/image';

import './styles.scss'

const MetaProject = ({ projectName, mainImage }) => {
	return (
		<div className="relative bg-gray-800 p-4 rounded-lg shadow-lg">
			<div className="bg-gray-700 h-4 rounded-t-lg" />
			<div className="relative w-full h-64 bg-black flex items-center justify-center">
				<Image src={mainImage} alt={projectName} layout="fill" objectFit="contain" className="rounded-md" />
			</div>
			<div className="bg-gray-700 h-8 mt-2 rounded-b-lg flex items-center justify-center">
				<div className="w-6 h-6 bg-red-500 rounded-full mx-2"></div>
				<div className="w-6 h-6 bg-blue-500 rounded-full mx-2"></div>
			</div>
		</div>
	)
}

export default MetaProject;
