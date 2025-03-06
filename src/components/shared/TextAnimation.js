import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import AnimatedText from './AnimatedText';

const TextAnimation = ({ 
  textArray, 
}) => {
  const [wordIndex, setWordIndex] = useState(0)
  const onComplete = useCallback(() => {
    setWordIndex(curr => {
      if (curr + 1 < textArray.length) {
        return curr + 1
      }
      return 0
    })
  }, [textArray])
  return <>
    <AnimatedText 
      text={textArray[wordIndex]}
      onComplete={onComplete}
    />
  </>
};

TextAnimation.propTypes = {
	textArray: PropTypes.arrayOf(PropTypes.string), 
	isRepeating: PropTypes.bool
};

export default TextAnimation;