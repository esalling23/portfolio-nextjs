import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextAnimation from '@/components/shared/TextAnimation';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionBox from '@/components/shared/SectionContainer/SectionBox';

import styles from './styles.module.scss';

const HomeSection = ({
	typewriterTexts = [],
	isTyping = true,
}) => {
	return (
		<SectionContainer id="home">
			<SectionBox className={classNames(
				'background-color-light p-8 md:p-5 justify-center',
				styles.homeBanner
			)}>
				<div className="text-color-black text-title">
					Hello,<br/>
					{'I\'m '}
					<span className="text-color-dark">Eron Salling</span>
				</div>
			</SectionBox>
			<SectionBox className="text-color-light justify-center">
				<div className={classNames(
					'flex flex-col background-color-black', 
					styles.terminal
				)}>
					<div className={styles.appBar}>
						<div className={styles.appBarButton} />
					</div>
					<div className={classNames(
						'flex', 
						styles.typewriter
					)}>
						<span className="pr-3">{'%'}</span>
						{typewriterTexts?.length > 0
							&& isTyping
							&& <TextAnimation textArray={typewriterTexts}/>}
					</div>
				</div>
				{/* 3D model */}
			</SectionBox>
		</SectionContainer>
	);
};

HomeSection.propTypes = {
	title: PropTypes.string,
	typewriterTexts: PropTypes.arrayOf(PropTypes.string),
	isTyping: PropTypes.bool
};

export default HomeSection;
