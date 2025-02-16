import React from 'react'

const HeaderItem = ({name,icon}) => {
  return (
    <div className='flex items-center gap-3 text-[15px] hover:underline underline-offset-8'>
      {icon}
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem