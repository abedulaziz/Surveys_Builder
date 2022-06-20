import React from 'react'

const submitButton = React.forwardRef((props, ref) => {
  return (
    <div className='submit_wrapper'>
      <button ref={ref} className='submitBut' type='submit' onClick={props.onSubmitForm}>{props.buttonValue}</button>
    </div>
  )
})

export default submitButton