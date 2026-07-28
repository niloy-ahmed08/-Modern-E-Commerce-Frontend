import React from 'react'

const SecHead = ({headtitles,headtitletexttwo}) => {
  return (
    <div>
        <div className='flex gap-9 items-center'>
            <div className='bg-primary rounded-sm w-5 h-10'></div>
            <h4 className='text-primary'>{headtitles}</h4>
        </div>
            <h1 className='text-3xl font-semibold mt-7.5'>{headtitletexttwo}</h1>
      
    </div>
  )
}

export default SecHead
