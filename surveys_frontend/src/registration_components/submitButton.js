import React from 'react'

const submitButton = (props) => {
  return (
    <div className='submit_wrapper'>
      <button type='submit' onClick={props.onSubmitForm}>{props.buttonValue}</button>
    </div>
  )
}

export default submitButton