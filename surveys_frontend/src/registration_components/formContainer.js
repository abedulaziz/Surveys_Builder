import React from 'react'
import FormHead from './formHead';
import InputType from './inputType';
import SubmitButton from './submitButton';

const formContainer = (props) => {
  return (

    <div className='container'>
      <h1 className='page_head'>Welcome to our surveys</h1>

      <div className='form_wrapper'>
        <form className='login_form'>
          <FormHead head="Log in" desc="sign-in and access our surveys"/>

          <InputType type="text" placeholder="Email"/>
          <InputType type="password" placeholder="Password"/>

          <SubmitButton buttonValue="Sign in" onSubmitForm={props.onSubmitForm}/>
          <div className='redirect'>
            <p>Don't have an existing account? <a href='#'>Sign-up</a></p>
            <p>Are you an admin? <a href='#'>Log-in here</a></p>
          </div>

        </form>
      </div>
    </div>

  )
}

export default formContainer