import React from 'react';
import PropTypes from 'prop-types';
// import Typewriter from 'typewriter-effect';

// console.log({ Typewriter })

const TextAnimation = ({ textArray, isRepeating = true }) => {
  return <></>
	// return <Typewriter
  //   onInit={() => {}}
	// 	options={{
	// 		strings: textArray,
	// 		autoStart: true,
	// 		loop: isRepeating,
	// 		skipAddStyles: true
	// 	}}
	// />;
};

TextAnimation.propTypes = {
	textArray: PropTypes.arrayOf(PropTypes.string), 
	isRepeating: PropTypes.bool
};

export default TextAnimation;