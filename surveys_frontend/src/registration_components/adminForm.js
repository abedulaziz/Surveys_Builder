import React from 'react'

const adminForm = ({title, created_at }) => {
  return (
    <div className='form'>
      <div>
        <h4 className='title'>{title}</h4>
        <p className='created_at'>{created_at}</p>
      </div>
      <div className='submits'>Submits: <span className='submits_num'>32</span></div>
  </div>
  )
}

export default adminForm