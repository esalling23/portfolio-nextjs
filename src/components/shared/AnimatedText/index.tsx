'use client'
import React, { JSX, useEffect, useRef } from "react";
import { motion, useCycle } from 'motion/react';

type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  onComplete?: () => void;
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.1,
    }
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 1.5, 
      staggerChildren: 0
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.1
    }
  }
}

const AnimatedText = ({
  text, 
  el: Wrapper = 'p',
  className,
  onComplete = () => {}
}: AnimatedTextProps) => {
  const wordPrinted = useRef(false)
  const [animate, cycle] = useCycle("visible", "hide")

  useEffect(() => {
    wordPrinted.current = false
    cycle(0)
  }, [cycle, text])

  const onAnimComplete = () => {
    if (wordPrinted.current) {
      onComplete()
      return
    }
    wordPrinted.current = true
    cycle()
  }

  const characters = text?.split('').map((char, i) => (
    <motion.span
      key={`${char}-${i}`}
      variants={defaultAnimations}
      transition={{
        repeat: 1,
        repeatType: 'reverse'
      }}
    >
      {char}
    </motion.span>
  ))

  return <Wrapper className={className}>
    <span className="sr-only">{text}</span>
    <motion.span 
      initial="hidden"
      animate={animate}
      transition={{ 
        staggerChildren: wordPrinted.current ? 0 : 0.1,
      }}
      onAnimationComplete={onAnimComplete}
      aria-hidden
    >
      {characters}
    </motion.span>
  </Wrapper>
}

export default AnimatedText