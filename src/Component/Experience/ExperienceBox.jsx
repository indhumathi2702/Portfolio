import React from 'react'

const ExperienceBox = ({ans,title,style}) => {
  return (
    <div style={{...style}} className='Experience'>
        
        <h1>{title}</h1>
        <h3>{ans}</h3>
    </div>
  )
}

export default ExperienceBox