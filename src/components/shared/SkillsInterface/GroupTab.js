
import React from 'react'

const GroupTab = ({
  isActive,
  setActiveGroup,
  groupKey,
  groupName
}) => {
  return <button
    key={groupKey}
    onClick={() => setActiveGroup(groupKey)}
    className={`groupButton w-1/2 md:w-full m-0 border rounded-none py-2 background-color-main hover:background-color-bright text-black hover:text-white ${isActive ? 'isActive' : ''}`}
  >
    {groupName}
  </button>
}

export default GroupTab