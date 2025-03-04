import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

// Text element that can see more or see less
const SeeMoreText = ({
	extras,
	text,
	onToggle = () => {}
}) => {
	const [isSeeingMore, setIsSeeingMore] = useState(false);

	const seenText = useMemo(() => {
		if (isSeeingMore) {
			return text;
		}
		// Show first sentence
		return text.split(/\.(\s|\w)/)[0] + '.';
	}, [text, isSeeingMore]);

	const handleToggleTextLength = () => {
		setIsSeeingMore(curr => !curr);
	};

	useEffect(() => {
		onToggle();
	}, [seenText]);

	return (
		<>
			<p>{seenText}</p>
			{isSeeingMore && (
				<div className="mb-3">{extras}</div>
			)}
			<button
				onClick={handleToggleTextLength}
				className="text-blue-500 hover:underline cursor-pointer"
			>
				{`See ${isSeeingMore ? 'Less' : 'More'}`}
			</button>
		</>
	);
};

SeeMoreText.propTypes = {
	extras: PropTypes.any,
	text: PropTypes.string,
	onToggle: PropTypes.func
};

export default SeeMoreText;
