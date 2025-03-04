'use client'
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Pill from './Pill';
import GroupTab from './GroupTab'
import SectionContainer from '../SectionContainer';

import './styles.scss'

const GROUPS = {
	FE: 'Frontend',
	BE: 'Backend',
	FS: 'Fullstack',
	GD: 'Game Development',
	DC: 'DevOps',
	DB: 'Database Management',
};

const SkillsInterface = ({ items }) => {
	const [activeGroup, setActiveGroup] = useState(Object.keys(GROUPS)[0]);

	const groupedItems = items?.reduce((acc, item) => {
		acc[item.group] = acc[item.group] || [];
		acc[item.group].push(item);
		return acc;
	}, {});

	const sideBarTabs = (
		<div className="flex flex-row md:flex-col flex-wrap border-0 rounded-none sm:mb-5">
			{Object.keys(GROUPS).map((group) => (
				<GroupTab 
          key={group}
          groupKey={group}
          groupName={GROUPS[group]}
          isActive={activeGroup === group}
          setActiveGroup={setActiveGroup}
        />
			))}
		</div>
	);

  const pills = useMemo(() => {
    if (!groupedItems || !groupedItems[activeGroup]) return ''
    return groupedItems[activeGroup].map((item, index) => (
      <Pill key={index} name={item.name} />
    ))
  }, [groupedItems, activeGroup])

	return (
		<SectionContainer className="flex-col mx-auto p-4 pt-8 py-10 justify-center background-white">
			<h2 className="text-center text-title font-bold pb-8">Tech and Skills</h2>
			<div className="flex flex-col md:flex-row gap-5">
				{/* Tabs */}
				<div className="flex-col h-fit w-full md:w-1/3 flex justify-start content-start items-stretch">
					{sideBarTabs}
				</div>

				{/* Pills for active group */}
				<div className="w-full h-fit md:w-2/3 flex flex-wrap gap-2 items-start content-start justify-start">
					{pills}
				</div>
			</div>
		</SectionContainer>
	);
};

SkillsInterface.propTypes = {
	items: PropTypes.array
};

export default SkillsInterface;
