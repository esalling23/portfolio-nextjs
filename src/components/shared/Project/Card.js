import classNames from 'classnames'
import React from 'react'


const Card = ({ 
  children, 
  className,
  ...rest 
}) => {
  return <div 
    className={classNames(
      "bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between",
      className
    )}
    {...rest}
  >
    {children || ''}
  </div>
}

export default Card