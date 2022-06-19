import React from 'react'

const formHead = (props) => {
  return (
    <div className='form_header_wrapper'>
      <h2 className='form_head'>{props.head}</h2>
      <p className='form_desc'>{props.desc}</p>
    </div>
  )
}

export default formHead